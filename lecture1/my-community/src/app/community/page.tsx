'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import CommunityFeed from '@/components/community/CommunityFeed';

function CommunityContent() {
  const searchParams = useSearchParams();
  const sort = searchParams.get('sort') ?? 'latest';

  return (
    <MainLayout>
      <div className="section-container py-12 md:py-16">
        <div className="mb-10">
          <p className="text-xs tracking-[0.2em] uppercase text-[#8C7A6E] mb-2">Community</p>
          <h1 className="text-editorial text-4xl md:text-5xl font-bold text-[#B8122A] mb-6">
            갤러리
          </h1>
          <div className="flex gap-2">
            {[
              { label: '최신순', value: 'latest' },
              { label: '인기순', value: 'popular' },
            ].map(({ label, value }) => (
              <a
                key={value}
                href={`?sort=${value}`}
                className={`px-4 py-1.5 text-sm rounded-full border transition-colors duration-200 ${
                  sort === value
                    ? 'bg-[#B8122A] text-white border-[#B8122A]'
                    : 'border-[#E8D8DC] text-[#8C7A6E] hover:border-[#B8122A] hover:text-[#B8122A]'
                }`}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
        <CommunityFeed sort={sort} />
      </div>
    </MainLayout>
  );
}

export default function CommunityPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#FAE8EC]" />}>
      <CommunityContent />
    </Suspense>
  );
}
