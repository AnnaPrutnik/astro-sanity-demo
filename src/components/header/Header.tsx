'use client';

import { Menu } from './Menu';
import { SanityImageType } from '../../../types/sanityTypes';
import { languages } from '@/i18n/routing';
import { useLocale } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';

interface HeaderProps {
  logo: { text?: string | undefined; image?: SanityImageType | undefined };
}

const activeStyle = 'outline-none text-accent';
const inactiveStyle = 'outline-none text-grey';

const Header = ({ logo }: HeaderProps) => {
  const pathname = usePathname();
  const locale = useLocale();

  return (
    <header className="bg-black border-b-[1px] border-dark-grey px-6 py-4 relative z-10">
      <div className="flex justify-between items-center">
        {logo.text && (
          <p className="text-accent text-[24px] font-bold">{logo.text}</p>
        )}
        <div className="flex gap-8">
          <ul className="flex gap-4 text-xlb text-grey uppercase">
            {languages.map((curLocale) => (
              <li key={curLocale.path}>
                <Link
                  href={{
                    pathname: pathname,
                  }}
                  replace
                  locale={curLocale.path}
                  scroll={false}
                  className={
                    curLocale.path === locale ? activeStyle : inactiveStyle
                  }
                >
                  {curLocale.label}
                </Link>
              </li>
            ))}
          </ul>
          <Menu />
        </div>
      </div>
    </header>
  );
};

export default Header;
