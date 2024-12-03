'use client'

import { useState } from 'react'
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import { ChevronDownIcon, PlayCircleIcon, PhoneIcon } from '@heroicons/react/20/solid'
import {
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  ArrowPathIcon,
} from '@heroicons/react/24/outline'

const products = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
  { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
  { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]

const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

export default function Example() {
  return (
    <header className=" bg-black/80 backdrop-blur-lg fixed top-0 left-0 w-full z-10">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">SpellSkill</span>
            <span className="font-bold text-2xl text-white">
              <span className='text-red-500'>Lernuvo</span>
            </span>
          </a>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
        <div className="group">
                <a href="/socials" className="block rounded-lg text-base/7 group font-semibold text-green-500 hover:text-red-500 transition">
                Home
                    
                </a>
                <div className="bg-red-500 h-[1px] w-0 group-hover:w-full  transition-all duration-300 ease-in-out"></div>
            </div>
          <div className="group">
                <a href="/socials" className="block rounded-lg text-base/7 group font-semibold text-green-500 hover:text-red-500 transition">
                    Über Uns
                    
                </a>
                <div className="bg-red-500 h-[1px] w-0 group-hover:w-full transition-all duration-300 ease-in-out"></div>
            </div>
          <div className="group">
                <a href="/socials" className="block rounded-lg text-base/7 group font-semibold text-green-500 hover:text-red-500 transition">
                    Übungen
                    
                </a>
                <div className="bg-red-500 h-[1px] w-0 group-hover:w-full transition-all duration-300 ease-in-out"></div>
            </div>
        </PopoverGroup>
        <div className="mr-3 hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="p-1 border border-black bg-green-500 ml-12 text-sm font-semibold text-black hover:bg-red-500 rounded-md hover:scale-105 transition">
            Regestriren 
          </a>
        </div>
        <div className="hidden lg:flex lg:flex-2 lg:justify-end">
          <a href="#" className="text-sm font-semibold text-green-500 hover:text-red-500 rounded-md p-1 border border-black hover:border-red-500 hover:scale-105 transition">
            Anmelden
          </a>
        </div>
      </nav>
    </header>
  )
}
