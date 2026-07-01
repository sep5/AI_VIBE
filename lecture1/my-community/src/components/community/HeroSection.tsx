'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

function fadeUpVariant(delay = 0) {
  return {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay, ease: 'easeOut' as const },
    },
  };
}

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[60vh] md:min-h-[70vh] flex items-center overflow-hidden bg-[#FAE8EC]"
      aria-label="히어로 섹션"
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, #B8122A15 0%, transparent 50%),
                            radial-gradient(circle at 80% 20%, #4A7A3015 0%, transparent 50%)`,
        }}
      />

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center py-16 md:py-24">
          {/* Left — Text */}
          <div>
            <motion.p
              className="text-xs tracking-[0.25em] uppercase text-[#8C7A6E] mb-4"
              variants={fadeUpVariant(0)}
              initial="hidden"
              animate="visible"
            >
              Welcome to My Community
            </motion.p>
            <motion.h1
              className="text-editorial text-5xl md:text-6xl lg:text-7xl font-bold text-[#B8122A] leading-[1.1] mb-6"
              variants={fadeUpVariant(0.15)}
              initial="hidden"
              animate="visible"
            >
              조용한
              <br />
              숲속의
              <br />
              갤러리
            </motion.h1>
            <motion.p
              className="text-base md:text-lg text-foreground/60 leading-relaxed mb-10 max-w-sm"
              variants={fadeUpVariant(0.3)}
              initial="hidden"
              animate="visible"
            >
              일상의 아름다운 순간을 담아 나누는 공간.
              <br />
              자연과 삶을 사랑하는 사람들의 조용한 커뮤니티.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-3"
              variants={fadeUpVariant(0.45)}
              initial="hidden"
              animate="visible"
            >
              <Link
                href="/community"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#B8122A] text-white text-sm font-medium rounded-full hover:bg-[#8C0A1E] transition-colors duration-200 group"
              >
                커뮤니티 보기
                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="/login"
                className="inline-flex items-center gap-2 px-6 py-3 border border-[#B8122A] text-[#B8122A] text-sm font-medium rounded-full hover:bg-[#B8122A] hover:text-white transition-colors duration-200"
              >
                글 작성하기
              </Link>
            </motion.div>
          </div>

          {/* Right — Decorative Image Grid */}
          <motion.div
            className="relative hidden md:block"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
          >
            <div className="relative aspect-[4/5] max-w-md ml-auto">
              {/* Main large image placeholder */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden bg-[#E8DFC8] img-zoom">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center text-[#8C7A6E]">
                    <div className="text-6xl mb-3">🌿</div>
                    <p className="text-sm tracking-wide">Gallery Image</p>
                  </div>
                </div>
              </div>

              {/* Overlay card */}
              <motion.div
                className="absolute -bottom-6 -left-6 bg-[#FDF4F6] border border-[#E8D8DC] rounded-xl p-4 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <p className="text-xs text-[#8C7A6E] mb-1">오늘의 포스트</p>
                <p className="text-sm font-medium text-[#B8122A] text-editorial">
                  숲속 산책의 기록
                </p>
                <p className="text-xs text-[#8C7A6E] mt-1">❤ 128 · 💬 24</p>
              </motion.div>

              {/* Accent dot */}
              <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-[#4A7A30]" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#FAE8EC] to-transparent" />
    </section>
  );
}
