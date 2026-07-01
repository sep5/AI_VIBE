import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { createServerSupabaseClient } from '@/lib/supabase-server';
import MainLayout from '@/components/layout/MainLayout';
import ProfileView from '@/features/profile/ProfileView';

export const metadata: Metadata = { title: '마이페이지' };

export default async function ProfilePage() {
  const supabase = await createServerSupabaseClient();
  const { data: sessionData } = await supabase.auth.getSession();

  if (!sessionData.session) redirect('/login');

  const userId = sessionData.session.user.id;
  const { data: user } = await supabase
    .from('users')
    .select('*')
    .eq('id', userId)
    .single();

  return (
    <MainLayout>
      <div className="section-container py-12 md:py-16">
        <ProfileView user={user} />
      </div>
    </MainLayout>
  );
}
