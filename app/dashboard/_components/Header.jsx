"use client"
import { UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

function Header() {
  const router = useRouter();
  const path = usePathname();

  const onStart = () => {
    router.push('/dashboard');
  };
  const onAbout = () => {
    router.push('/dashboard/about-us');
  };
  const onFaq = () => {
    router.push('/dashboard/faqs');
  };

  useEffect(() => {
    console.log(path);
  }, [path]); // Added dependency to useEffect for better performance

  return (
    <div className='sticky top-0 z-50 flex p-4 items-center justify-between bg-black shadow-sm'>
      <Image className='px-5' src={"/logo.svg"} width={120} height={100} />
      <ul className='hidden text-white md:flex gap-8'>
        <li
          onClick={onStart}
          className={`hover:text-orange-500 uppercase hover:font-bold transition-all cursor-pointer ${path === '/dashboard' ? 'text-orange-500 font-bold' : ''}`}
        >
          Dashboard
        </li>
        <li
          onClick={onAbout}
          className={`hover:text-orange-500 uppercase hover:font-bold transition-all cursor-pointer ${path === '/dashboard/about-us' ? 'text-orange-500 font-bold' : ''}`}
        >
          About Us
        </li>
        <li
          onClick={onFaq}
          className={`hover:text-orange-500 uppercase hover:font-bold transition-all cursor-pointer ${path === '/dashboard/faqs' ? 'text-orange-500 font-bold' : ''}`}
        >
          FAQ
        </li>
      </ul>
      <UserButton />
    </div>
  );
}

export default Header;
