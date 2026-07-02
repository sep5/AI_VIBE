'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';
import { cn } from '@/utils/cn';
import { supabase } from '@/lib/supabase';
import { toast } from 'sonner';

/**
 * LikeButton 컴포넌트
 *
 * Props:
 * @param {string} postId - 게시글 ID [Required]
 * @param {number} initialCount - 초기 좋아요 수 [Optional, 기본값: 0]
 * @param {boolean} initialLiked - 초기 좋아요 여부 [Optional, 기본값: false]
 *
 * Example usage:
 * <LikeButton postId="123" initialCount={10} initialLiked={false} />
 */
export default function LikeButton({
  postId,
  initialCount = 0,
  initialLiked = false,
}: {
  postId: string;
  initialCount?: number;
  initialLiked?: boolean;
}) {
  const [liked, setLiked] = useState(initialLiked);
  const [count, setCount] = useState(initialCount);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPending, setIsPending] = useState(false);

  const handleLike = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isPending) return;

    const { data: sessionData } = await supabase.auth.getSession();
    if (!sessionData.session) {
      toast.error('로그인 후 이용해주세요.');
      return;
    }

    const userId = sessionData.session.user.id;
    const prevLiked = liked;
    const prevCount = count;

    /* 낙관적 업데이트 */
    setIsPending(true);
    setIsAnimating(true);
    setLiked(!liked);
    setCount((c) => (liked ? c - 1 : c + 1));

    try {
      if (prevLiked) {
        const { error } = await supabase
          .from('likes')
          .delete()
          .eq('post_id', postId)
          .eq('user_id', userId);
        if (error) throw error;
      } else {
        const { error } = await supabase
          .from('likes')
          .insert({ post_id: postId, user_id: userId });
        if (error) throw error;
      }

      /* DB 실제 카운트로 동기화 */
      const { count: actual } = await supabase
        .from('likes')
        .select('*', { count: 'exact', head: true })
        .eq('post_id', postId);
      if (actual !== null) setCount(actual);

    } catch {
      /* 실패 시 롤백 */
      setLiked(prevLiked);
      setCount(prevCount);
      toast.error('처리 중 오류가 발생했습니다.');
    } finally {
      setIsPending(false);
      setTimeout(() => setIsAnimating(false), 250);
    }
  };

  return (
    <button
      onClick={handleLike}
      aria-label={liked ? '좋아요 취소' : '좋아요'}
      aria-pressed={liked}
      className={cn(
        'flex items-center gap-1.5 text-xs transition-colors duration-200',
        liked ? 'text-[#C41E2A]' : 'text-[#7E6E62] hover:text-[#C41E2A]'
      )}
    >
      <motion.span
        animate={isAnimating ? { scale: [1, 1.4, 1] } : { scale: 1 }}
        transition={{ duration: 0.25 }}
      >
        <Heart
          size={13}
          className={cn('transition-all', liked && 'fill-[#C41E2A]')}
          aria-hidden
        />
      </motion.span>
      <AnimatePresence mode="popLayout">
        <motion.span
          key={count}
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 6 }}
          transition={{ duration: 0.2 }}
        >
          {count}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
