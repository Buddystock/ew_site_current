'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { PiX, PiList } from 'react-icons/pi'

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
    <>
      <PiList
        size={32}
        className={`icon list ${drawerOpen ? 'invisible' : ''}`}
        onClick={toggleDrawer}
      />

      <nav className={`h-full p-2 flex flex-col justify-evenly items-start drawer ${drawerOpen ? 'open' : ''} bg-transparent`}>

        <PiX
          className="icon close"
          size={20}
          onClick={toggleDrawer}
        />

        <ul className="relative bottom-8 drawer-content flex flex-col items-start justify-end">

          <li className="pb-8 ml-4">
            <Link href="/" className="text-xl/6"
            >home</Link>
          </li>

          <li className="py-8 ml-4">
            <Link href="/about" className="text-xl/6">about</Link>
          </li>

          <li className="py-8 ml-4">
            <Link href="/music" className="text-xl/6">music</Link>
          </li>

          <li className="py-8 ml-4">
            <Link href="/shows" className="text-xl/6">shows</Link>
          </li>

          <li className="pt-8 ml-4">
            <Link href="/contact" className="text-xl/6">contact</Link>
          </li>

        </ul>
      </nav>
    </>
  );
};
