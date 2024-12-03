'use client'
import { useEffect, useState } from 'react'
import '../css/global.css'
import {
  Popover,
  PopoverGroup,
} from '@headlessui/react'
import { ChartPieIcon, CursorArrowRaysIcon, FingerPrintIcon, SquaresPlusIcon, ArrowPathIcon } from '@heroicons/react/24/outline'

const products = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
  { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
  { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]

export default function Example() {
  const [theme, setTheme] = useState('light');

  // Set theme on initial load based on localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  // Handle theme toggle
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <header className="bg-dark/80 dark:bg-light/80 backdrop-blur-lg fixed top-0 left-0 w-full z-10">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">SpellSkill</span>
            <span className="font-bold text-4xl">
              <span className='text-primary dark:text-primarydark name'>Spellid</span>
            </span>
          </a>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <div className="group">
            <a href="/" className="block rounded-lg text-2xl group font-semibold text-secondary  hover:text-primary transition dark:text-dark dark:hover:text-primarydark">
              Home
            </a>
            <div className="bg-primary h-[1px] w-0 group-hover:w-full transition-all duration-500 ease-in-out"></div>
          </div>
          <div className="group">
            <a href="/about" className="block rounded-lg text-2xl group font-semibold text-secondary hover:text-primary transition dark:text-dark dark:hover:text-primarydark">
              Über Uns
            </a>
            <div className="bg-primary h-[1px] w-0 group-hover:w-full transition-all duration-500 ease-in-out"></div>
          </div>
          <div className="group">
            <a href="/socials" className="block rounded-lg text-2xl group font-semibold text-secondary hover:text-primary transition dark:text-dark dark:hover:text-primarydark">
              Übungen
            </a>
            <div className="bg-primary h-[1px] w-0 group-hover:w-full transition-all duration-500 ease-in-out"></div>
          </div>
        </PopoverGroup>
        <div className="mr-3 hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="p-1 border border-dark/80 bg-secondary dark:bg-dark dark:text-light ml-12 text-sm font-semibold text-black hover:bg-primary dark:hover:bg-primarydark rounded-md hover:scale-105 transition">
            Regestriren 
          </a>
        </div>
        <div className="hidden lg:flex lg:flex-2 lg:justify-end">
          <a href="#" className="text-sm font-semibold text-secondary dark:text-dark hover:text-primary dark:hover:text-primary rounded-md p-1 border border-dark/0 hover:border-primarydark hover:scale-105 transition">
            Anmelden
          </a>
        </div>
        <div
          id="colorSwitch"
          className="hover:cursor-pointer bg-dark dark:bg-light rounded-full p-2 ml-12"
          onClick={toggleTheme}
        >
          {theme === 'dark' ? (
            <img src="./icons/sunny-twotone-loop.svg" alt="Sun Icon" className="h-8 w-8" />
          ) : (
            <img src="./icons/moon-rising-filled-loop.svg" alt="Moon Icon" className="h-8 w-8" />
          )}
        </div>
      </nav>
    </header>
  );
}
