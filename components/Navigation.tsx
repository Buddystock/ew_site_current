'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { PiXLight, PiListLight } from 'react-icons/pi'

interface DrawerComponentProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DrawerComponent() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  function toggleDrawer() {
    setDrawerOpen(!drawerOpen);
  }

  return (
    <section>
      <PiListLight size={32} className="absolute top-6 left-6  hover:cursor-pointer" onClick={toggleDrawer} style={{ visibility: `${drawerOpen ? 'hidden' : ''}` }} />
      <div className={`drawer ${drawerOpen ? 'open' : ''}  bg-transparent`}>
        <nav className="drawer-content flex flex-col h-full p-8">
          <PiXLight className="hover:cursor-pointer" size={20} onClick={toggleDrawer} />
          <ul className="flex flex-col items-start justify-evenly">
            <li className="text-base/4 font-light tracking-tighter subpixel-antialiased py-6">
              <Link href="/" className="text-lg hover:cursor-pointer">home</Link>
            </li>
            <li className="text-base/4 font-light tracking-tighter subpixel-antialiased py-6">
              <Link href="/about" className="text-lg hover:cursor-pointer">about</Link>
            </li>
            <li className="text-base/4 font-light tracking-tighter subpixel-antialiased py-6">
              <Link href="/discography" className="text-lg hover:cursor-pointer">music</Link>
            </li>
            <li className="text-base/4 font-light tracking-tighter subpixel-antialiased py-6">
              <Link href="/shows" className="text-lg hover:cursor-pointer">shows</Link>
            </li>
            <li className="text-base/4 font-light tracking-tighter subpixel-antialiased py-6">
              <Link href="/merchandise" className="text-lg hover:cursor-pointer">merchandise</Link>
            </li>
            <li className="text-base/4 font-light tracking-tighter subpixel-antialiased py-6">
              <Link href="/contact" className="text-lg hover:cursor-pointer">contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};
