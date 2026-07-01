'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Heart, MessageCircle, Calendar } from 'lucide-react';
import { cn } from '@/utils/cn';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import type { Post } from '@/types';
import LikeButton from '@/components/community/LikeButton';

/**
 * PostCard 컴포넌트
 *
 * Props:
 * @param {Post} post - 게시글 데이터 [Required]
 * @param {number} index - 애니메이션 딜레이용 인덱스 [Optional, 기본값: 0]
 *
 * Example usage:
 * <PostCard post={post} index={0} />
 */
export default function PostCard({ post, index = 0 }: { post: Post; index?: number }) {
  const formattedDate = new Date(post.created_at).toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
      className="group bg-[#FDF4F6] border border-[#E8D8DC] rounded-2xl overflow-hidden card-hover"
    >
      <Link href={`/post/${post.id}`} aria-label={`게시글: ${post.title}`}>
        {/* Thumbnail */}
        <div className="relative overflow-hidden bg-[#E8DFC8]" style={{ aspectRatio: '4/3' }}>
          {post.thumbnail ? (
            <Image
              src={post.thumbnail}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-[#8C7A6E]">
              <div className="text-center">
                <span className="text-4xl">🌿</span>
                <p className="text-xs mt-2 tracking-wide">No Image</p>
              </div>
            </div>
          )}
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-[#B8122A]/0 group-hover:bg-[#B8122A]/5 transition-colors duration-300" />
        </div>
      </Link>

      {/* Card Body */}
      <div className="p-4 md:p-5">
        {/* Author */}
        <div className="flex items-center gap-2 mb-3">
          <Avatar className="w-7 h-7 border border-[#E8D8DC]">
            <AvatarImage src={post.author?.avatar ?? ''} alt={post.author?.nickname ?? '작성자'} />
            <AvatarFallback className="bg-[#E8DFC8] text-[#B8122A] text-xs">
              {post.author?.nickname?.[0]?.toUpperCase() ?? 'U'}
            </AvatarFallback>
          </Avatar>
          <span className="text-xs text-[#8C7A6E] font-medium">
            {post.author?.nickname ?? '익명'}
          </span>
          <span className="text-[#E8D8DC] text-xs">·</span>
          <time dateTime={post.created_at} className="text-xs text-[#8C7A6E]">
            {formattedDate}
          </time>
        </div>

        {/* Title */}
        <Link href={`/post/${post.id}`}>
          <h2 className="text-editorial text-base md:text-lg font-semibold text-foreground leading-snug hover:text-[#B8122A] transition-colors line-clamp-2 mb-3">
            {post.title}
          </h2>
        </Link>

        {/* Meta */}
        <div className="flex items-center gap-4">
          <LikeButton
            postId={post.id}
            initialCount={post.likes_count ?? 0}
            initialLiked={post.is_liked ?? false}
          />
          <div className="flex items-center gap-1 text-[#8C7A6E] text-xs">
            <MessageCircle size={13} aria-hidden />
            <span>{post.comments_count ?? 0}</span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
