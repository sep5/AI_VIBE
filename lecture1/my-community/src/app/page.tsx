import type { Metadata } from 'next';
import MainLayout from '@/components/layout/MainLayout';
import HeroSection from '@/components/community/HeroSection';
import BannerSection from '@/components/community/BannerSection';
import CommunityFeed from '@/components/community/CommunityFeed';

export const metadata: Metadata = {
  title: 'My Community — 조용한 숲속의 갤러리',
};

export default function HomePage() {
  return (
    <MainLayout>
      <section className="section-container pt-28 md:pt-32 pb-12 md:pb-16">
        <div className="mb-10">
          <p className="text-xs tracking-[0.2em] uppercase mb-2" style={{ color: '#7E6E62' }}>Latest Posts</p>
          <h2
            className="text-editorial text-3xl md:text-4xl font-bold italic"
            style={{ color: '#C82828' }}
          >
            최근 게시글
          </h2>
        </div>
        <CommunityFeed />
      </section>
      <BannerSection />
      <HeroSection />
    </MainLayout>
  );
}
