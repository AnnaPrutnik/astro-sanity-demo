import type { MouseEvent } from 'react';

interface NavigationProps {
  onClickLink?: (e: MouseEvent<HTMLAnchorElement>) => void;
}

const navigation = [
  {
    title: 'About',
    href: 'about',
  },
  { title: 'Services', href: 'services' },
  { title: 'Blog', href: 'blog' },
];

export const Navigation = ({ onClickLink }: NavigationProps) => {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <nav role="navigation" className="w-full max-w-[340px] px-2 mx-auto">
        <ul className=" flex flex-col gap-7 w-full md:gap-8 lg:gap-4">
          {navigation.map(({ href, title }) => (
            <li key={href} className="text-[60px]">
              <a
                href={`/#${href}`}
                onClick={onClickLink}
                className="flex gap-2 items-center burger-text hover:text-grey active:text-grey hover:group-odd:translate-x-[5%] hover:group-even:-translate-x-[5%] transition-all duration-500"
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
