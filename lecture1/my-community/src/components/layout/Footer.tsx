import Link from 'next/link';

const SOCIAL_LINKS = [
  { href: '#', label: 'Instagram', icon: 'IG' },
  { href: '#', label: 'Pinterest', icon: 'PT' },
  { href: '#', label: 'Twitter', icon: 'X' },
];

export default function Footer() {
  return (
    <footer className="bg-[#FDF4F6] border-t border-[#E8D8DC] mt-auto">
      <div className="section-container py-10 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6">
          {/* Left — Logo */}
          <div>
            <Link href="/" className="text-editorial text-xl font-bold text-[#B8122A]">
              My Community
            </Link>
            <p className="mt-1 text-xs text-[#8C7A6E]">조용한 숲속의 갤러리</p>
          </div>

          {/* Center — Copyright */}
          <div className="text-center">
            <p className="text-sm text-[#8C7A6E]">
              © {new Date().getFullYear()} My Community. All rights reserved.
            </p>
          </div>

          {/* Right — SNS */}
          <div className="flex items-center justify-start md:justify-end gap-4">
            {SOCIAL_LINKS.map(({ href, label, icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-8 h-8 flex items-center justify-center text-xs font-bold text-[#8C7A6E] border border-[#E8D8DC] rounded-full hover:border-[#B8122A] hover:text-[#B8122A] transition-colors duration-200"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
