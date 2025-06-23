import React from 'react';
import { Menu } from './Menu';
import { SanityImageType } from '../../../types/sanityTypes';

interface HeaderProps {
  logo: { text?: string | undefined; image?: SanityImageType | undefined };
}
const Header = ({ logo }: HeaderProps) => {
  return (
    <header className="bg-black border-b-[1px] border-dark-grey px-6 py-4 relative z-10">
      <div className="flex justify-between items-center">
        {logo.text && (
          <p className="text-accent text-[24px] font-bold">{logo.text}</p>
        )}
        <Menu />
      </div>
    </header>
  );
};

export default Header;
