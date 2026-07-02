'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Star, Heart, ArrowRight } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import type { Post } from '@/types';

const CARD_COLORS = ['#C82828', '#F5A0B5', '#88C0D0'];

const QUICK_LINKS = [
  { label: '오늘의 인기글', href: '/community?sort=popular', bg: '#F5A0B5', color: '#8C2018' },
  { label: '새로운 이야기', href: '/community', bg: '#88C0D0', color: '#1A4A5A' },
];

const FEATURES = [
  '무제한 글 작성 및 갤러리 공유',
  '댓글, 좋아요로 소통하기',
  '프로필 커스텀 및 마이페이지',
  '실시간 인기글 확인',
];

export default function HeroSection() {
  const [previews, setPreviews] = useState<Post[]>([]);

  useEffect(() => {
    supabase
      .from('posts')
      .select('id, title, thumbnail')
      .order('created_at', { ascending: false })
      .limit(3)
      .then(({ data }) => {
        if (data) setPreviews(data as Post[]);
      });
  }, []);

  return (
    <section className="bg-[#FFF8F2] pt-24" aria-label="히어로 섹션">
      <div className="section-container py-10 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-10 md:gap-16 items-start">

          {/* ── LEFT COLUMN — 게시글 미리보기 그리드 ── */}
          <motion.div
            className="flex flex-col gap-3"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            {/* 상단 큰 이미지 */}
            <Link href={previews[0] ? `/post?id=${previews[0].id}` : '/community'}>
              <div
                className="relative w-full rounded-2xl overflow-hidden"
                style={{ aspectRatio: '16/9' }}
              >
                {previews[0]?.thumbnail ? (
                  <Image
                    src={previews[0].thumbnail}
                    alt={previews[0].title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: CARD_COLORS[0] }}>
                    <span className="text-xs font-medium uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.5)' }}>
                      gallery image
                    </span>
                  </div>
                )}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full text-white" style={{ backgroundColor: '#C82828' }}>
                    New
                  </span>
                </div>
              </div>
            </Link>

            {/* 하단 두 개 이미지 */}
            <div className="grid grid-cols-2 gap-3">
              {[1, 2].map((i) => (
                <Link key={i} href={previews[i] ? `/post?id=${previews[i].id}` : '/community'}>
                  <div
                    className="relative w-full rounded-2xl overflow-hidden"
                    style={{ aspectRatio: '1/1' }}
                  >
                    {previews[i]?.thumbnail ? (
                      <Image
                        src={previews[i].thumbnail!}
                        alt={previews[i].title}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: CARD_COLORS[i] }}>
                        <span className="text-xs font-medium uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.5)' }}>
                          gallery image
                        </span>
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </div>

            {/* Quick links */}
            <div className="flex flex-col gap-2.5 mt-1">
              {QUICK_LINKS.map(({ label, href, bg, color }) => (
                <Link
                  key={label}
                  href={href}
                  className="flex items-center justify-between px-5 py-3.5 rounded-xl hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: bg }}
                >
                  <span className="text-sm font-medium" style={{ color }}>{label}</span>
                  <ArrowRight size={15} style={{ color }} />
                </Link>
              ))}
            </div>
          </motion.div>

          {/* ── RIGHT COLUMN ── */}
          <div className="flex flex-col justify-start pt-2">
            {/* Rating row */}
            <motion.div
              className="flex items-center gap-2 mb-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} fill="#C82828" style={{ color: '#C82828' }} />
                ))}
              </div>
              <span className="text-sm" style={{ color: '#7E6E62' }}>1,200+ 멤버</span>
            </motion.div>

            {/* Title + tagline */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1
                className="text-editorial text-5xl md:text-6xl lg:text-7xl font-bold italic leading-[1.05] mb-2"
                style={{ color: '#C82828' }}
              >
                My Community
              </h1>
              <p className="text-base" style={{ color: '#7E6E62' }}>조용한 숲속의 갤러리</p>
            </motion.div>

            {/* Description */}
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-sm font-semibold tracking-wide mb-2" style={{ color: '#C82828' }}>소개</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#5A4A40' }}>
                일상의 아름다운 순간을 담아 나누는 공간.<br />
                자연과 삶을 사랑하는 사람들의 조용한 커뮤니티.
              </p>
            </motion.div>

            {/* Features */}
            <motion.div
              className="mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-sm font-semibold tracking-wide mb-3" style={{ color: '#C82828' }}>멤버십 혜택</h3>
              <ul className="space-y-2">
                {FEATURES.map((f) => (
                  <li key={f} className="text-sm flex items-start gap-2" style={{ color: '#5A4A40' }}>
                    <span style={{ color: '#C82828' }} className="mt-0.5 flex-shrink-0">•</span>
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              className="flex flex-wrap items-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link
                href="/community"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white rounded-full hover:opacity-90 transition-opacity"
                style={{ backgroundColor: '#C82828' }}
              >
                커뮤니티 보기
                <ArrowRight size={14} />
              </Link>
              <Link
                href="/post/create"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-full border hover:bg-[#C82828] hover:text-white transition-all duration-200"
                style={{ color: '#C82828', borderColor: '#C82828' }}
              >
                글 작성하기
              </Link>
              <button
                className="w-11 h-11 rounded-full border flex items-center justify-center hover:bg-[#C82828] hover:border-[#C82828] group transition-all duration-200"
                style={{ borderColor: '#EAD8CC', color: '#C82828' }}
                aria-label="저장"
              >
                <Heart size={16} className="group-hover:text-white transition-colors" />
              </button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
