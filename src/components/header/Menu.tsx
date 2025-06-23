'use client';

import { useState, useEffect } from 'react';
import { twMerge } from 'tailwind-merge';
import type { MouseEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navigation } from './Navigation';

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClickMenuBtn = (e: MouseEvent<HTMLButtonElement>) => {
    setIsOpen((prev) => !prev);

    e.currentTarget.blur(); // Remove focus from the button after click
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      if (isOpen) {
        setIsOpen(false);
      }
    }
  };

  const onClickLink = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const link = e.currentTarget;

    const href = e.currentTarget.hash.slice(1);

    const element = document.getElementById(href);

    link.classList.add('clicked');
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
        link.classList.remove('clicked');
      }, 1000);
      setTimeout(() => {
        setIsOpen(false);
      }, 400);
    }
  };

  useEffect(() => {
    const main = document.querySelector('main');
    const footer = document.querySelector('footer');
    // const header = document.querySelector('header');

    // const userAgent = navigator.userAgent.toLowerCase();
    // const isWindow = userAgent.includes('windows');

    if (main) {
      main.inert = isOpen;
    }

    if (footer) {
      footer.inert = isOpen;
    }

    if (isOpen) {
      document.body.style.overflowY = 'hidden';
      //   if (isWindow) {
      //     document.body.style.paddingRight = '15px';
      //     if (header) {
      //       header.style.marginRight = '16px';
      //     }
      //   }
    } else {
      document.body.style.overflowY = 'auto';
      //   if (isWindow) {
      //     document.body.style.paddingRight = '0';
      //     if (header) {
      //       header.style.marginRight = '0';
      //     }
      //   }
    }
  }, [isOpen]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <motion.button
        className={twMerge(
          'size-6 flex flex-col gap-[3px] items-center justify-center cursor-pointer hover:text-grey focus:text-grey outline-none',
          isOpen ? 'burger-open' : 'burger-close'
        )}
        id="burger-btn"
        onClick={onClickMenuBtn}
        initial="close"
        animate={isOpen ? 'open' : 'close'}
        aria-label={isOpen ? 'open navigation menu' : 'close navigation menu'}
        aria-expanded={isOpen}
        aria-controls="main-menu"
      >
        <motion.span
          aria-hidden
          className="w-[16px] h-[2px] bg-current transition-all"
          variants={{
            close: { rotate: 0, y: 0, scaleY: 1 },
            open: { rotate: '40deg', y: '5px', scaleY: 1.1 },
          }}
        ></motion.span>
        <motion.span
          aria-hidden
          className="w-[16px] h-[2px] bg-current transition-all"
          variants={{
            close: { opacity: 1 },
            open: { opacity: 0 },
          }}
        ></motion.span>
        <motion.span
          aria-hidden
          className="w-[16px] h-[2px] bg-current transition-all"
          variants={{
            close: { rotate: 0, y: 0, scaleY: 1 },
            open: { rotate: '-40deg', y: '-5px', scaleY: 1.1 },
          }}
        ></motion.span>
      </motion.button>
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black flex items-center justify-center z-[-1]"
            key="nav-menu"
            initial={{ y: '-110%' }}
            animate={{
              y: isOpen ? 0 : '-110%',
            }}
            exit={{
              y: '-110%',
            }}
            transition={{
              y: {
                type: 'keyframes',
                bounce: 0.5,
                duration: 1,
              },
            }}
            aria-label="Navigation Menu"
            id="main-menu"
          >
            <div className="w-full h-full bg-black relative z-[1]">
              <Navigation onClickLink={onClickLink} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
