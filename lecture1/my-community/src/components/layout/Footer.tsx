import Link from 'next/link';

const SOCIAL_LINKS = [
  { href: '#', label: 'Instagram', icon: 'IG' },
  { href: '#', label: 'Pinterest', icon: 'PT' },
  { href: '#', label: 'Twitter', icon: 'X' },
];

export default function Footer() {
  return (
    <footer className="bg-[#F7F3ED] border-t border-[#D8D0C8] mt-auto">
      <div className="section-container py-10 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6">
          {/* Left — Logo */}
          <div>
            <Link href="/" className="text-editorial text-xl font-bold text-[#C41E2A]">
              My Community
            </Link>
            <p className="mt-1 text-xs text-[#7E6E62]">조용한 숲속의 갤러리</p>
          </div>

          {/* Center — Copyright */}
          <div className="text-center">
            <p className="text-sm text-[#7E6E62]">
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
                className="w-8 h-8 flex items-center justify-center text-xs font-bold text-[#7E6E62] border border-[#D8D0C8] rounded-full hover:border-[#C41E2A] hover:text-[#C41E2A] transition-colors duration-200"
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
