'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Bell, User, Menu, X, LogOut, Settings } from 'lucide-react';
import { cn } from '@/utils/cn';
import { supabase } from '@/lib/supabase';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/community', label: 'Community' },
  { href: '/community?sort=popular', label: 'Popular' },
  { href: '/profile', label: 'My Page' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [user, setUser] = useState<{ email?: string; nickname?: string; avatar?: string } | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session?.user) {
        const u = data.session.user;
        setUser({
          email: u.email,
          nickname: u.user_metadata?.nickname,
          avatar: u.user_metadata?.avatar_url,
        });
      }
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        const u = session.user;
        setUser({
          email: u.email,
          nickname: u.user_metadata?.nickname,
          avatar: u.user_metadata?.avatar_url,
        });
      } else {
        setUser(null);
      }
    });

    return () => listener.subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/');
  };

  return (
    <>
      <motion.header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled
            ? 'bg-[#FAE8EC]/95 backdrop-blur-md shadow-sm border-b border-[#E8D8DC]'
            : 'bg-transparent'
        )}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <span className="text-editorial text-xl md:text-2xl font-bold text-[#B8122A] tracking-tight group-hover:opacity-80 transition-opacity">
                My Community
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8" aria-label="주요 내비게이션">
              {NAV_LINKS.map(({ href, label }) => (
                <Link
                  key={label}
                  href={href}
                  className={cn(
                    'text-sm font-medium tracking-wide transition-colors duration-200',
                    pathname === href
                      ? 'text-[#B8122A]'
                      : 'text-foreground/70 hover:text-[#B8122A]'
                  )}
                >
                  {label}
                </Link>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-3">
              <button
                aria-label="검색"
                className="p-2 rounded-full text-foreground/60 hover:text-[#B8122A] hover:bg-[#B8122A]/10 transition-colors"
                onClick={() => router.push('/community')}
              >
                <Search size={18} />
              </button>
              <button
                aria-label="알림"
                className="p-2 rounded-full text-foreground/60 hover:text-[#B8122A] hover:bg-[#B8122A]/10 transition-colors"
              >
                <Bell size={18} />
              </button>

              {user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger
                    className="rounded-full focus-visible:outline-2 focus-visible:outline-[#B8122A]"
                    aria-label="프로필 메뉴"
                  >
                    <Avatar className="w-9 h-9 border-2 border-[#E8D8DC] hover:border-[#B8122A] transition-colors">
                      <AvatarImage src={user.avatar} alt={user.nickname ?? '프로필'} />
                      <AvatarFallback className="bg-[#E8DFC8] text-[#B8122A] text-sm font-medium">
                        {user.nickname?.[0]?.toUpperCase() ?? 'U'}
                      </AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48 bg-[#FDF4F6] border-[#E8D8DC]">
                    <DropdownMenuItem onClick={() => router.push('/profile')} className="flex items-center gap-2 cursor-pointer">
                      <User size={14} />
                      마이페이지
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      onClick={handleLogout}
                      className="text-[#B8122A] flex items-center gap-2 cursor-pointer"
                    >
                      <LogOut size={14} />
                      로그아웃
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  href="/login"
                  className="px-4 py-2 text-sm font-medium bg-[#B8122A] text-white rounded-full hover:bg-[#8C0A1E] transition-colors duration-200"
                >
                  로그인
                </Link>
              )}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 text-foreground/60 hover:text-[#B8122A] transition-colors"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? '메뉴 닫기' : '메뉴 열기'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-black/20 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.nav
              className="absolute top-16 left-0 right-0 bg-[#FAE8EC] border-b border-[#E8D8DC] py-6 px-6"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.25 }}
              aria-label="모바일 내비게이션"
            >
              {NAV_LINKS.map(({ href, label }) => (
                <Link
                  key={label}
                  href={href}
                  className="block py-3 text-base font-medium text-foreground/70 hover:text-[#B8122A] transition-colors border-b border-[#E8D8DC] last:border-0"
                  onClick={() => setMobileOpen(false)}
                >
                  {label}
                </Link>
              ))}
              <div className="mt-4">
                {user ? (
                  <button
                    onClick={() => { handleLogout(); setMobileOpen(false); }}
                    className="w-full py-2 text-sm font-medium text-[#B8122A] border border-[#B8122A] rounded-full hover:bg-[#B8122A] hover:text-white transition-colors"
                  >
                    로그아웃
                  </button>
                ) : (
                  <Link
                    href="/login"
                    className="block w-full py-2 text-center text-sm font-medium bg-[#B8122A] text-white rounded-full hover:bg-[#8C0A1E] transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    로그인
                  </Link>
                )}
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
