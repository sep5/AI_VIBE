'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Star, Heart, ArrowRight } from 'lucide-react';

const THUMBNAILS = [
  { bg: '#C82828' },
  { bg: '#88C0D0' },
];

const SWATCHES = [
  { color: '#C82828' },
  { color: '#F5A0B5' },
  { color: '#88C0D0' },
];

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
  return (
    <section className="bg-[#FFF8F2] pt-24" aria-label="히어로 섹션">
      <div className="section-container py-10 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-10 md:gap-16 items-start">

          {/* ── LEFT COLUMN ── */}
          <div className="flex gap-3 md:gap-4">
            {/* Thumbnail strip */}
            <div className="hidden md:flex flex-col gap-2.5 pt-1 flex-shrink-0">
              {THUMBNAILS.map(({ bg }, i) => (
                <div
                  key={i}
                  className="w-[60px] h-[60px] rounded-xl cursor-pointer hover:opacity-80 transition-opacity"
                  style={{ backgroundColor: bg }}
                />
              ))}
            </div>

            {/* Main image + swatches + quick links */}
            <div className="flex-1 flex flex-col gap-4">
              {/* Main featured image block */}
              <motion.div
                className="relative rounded-2xl overflow-hidden"
                style={{ aspectRatio: '4/5', backgroundColor: '#F5A0B5' }}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center select-none">
                    <div className="text-8xl mb-3">🍀</div>
                    <p className="text-xs tracking-[0.2em] uppercase font-medium" style={{ color: 'rgba(255,255,255,0.55)' }}>
                      Gallery
                    </p>
                  </div>
                </div>
                {/* Badge */}
                <div className="absolute top-3 left-3">
                  <span
                    className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full text-white"
                    style={{ backgroundColor: '#C82828' }}
                  >
                    New
                  </span>
                </div>
                {/* Heart button */}
                <button
                  className="absolute top-3 right-3 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
                  aria-label="저장"
                >
                  <Heart size={14} style={{ color: '#C82828' }} />
                </button>
              </motion.div>

              {/* Color swatches */}
              <div className="flex items-center gap-3 px-1">
                {SWATCHES.map(({ color }, i) => (
                  <div
                    key={i}
                    className="w-5 h-5 rounded-full cursor-pointer hover:scale-110 transition-transform border-2"
                    style={{ backgroundColor: color, borderColor: color }}
                  />
                ))}
              </div>

              {/* Quick link accordions */}
              {QUICK_LINKS.map(({ label, href, bg, color }) => (
                <Link
                  key={label}
                  href={href}
                  className="flex items-center justify-between px-5 py-4 rounded-xl hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: bg }}
                >
                  <span className="text-sm font-medium" style={{ color }}>{label}</span>
                  <ArrowRight size={15} style={{ color }} />
                </Link>
              ))}
            </div>
          </div>

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
