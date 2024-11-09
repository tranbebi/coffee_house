"use client"
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from "react";
interface Link {
  name: string;
  path: string;
}
export default function Header() {
    const pathname  = usePathname();
    const links: Link[] = [
      { name: "coffee", path: "/" },
      { name: "product", path: "/product" },
      { name: "Blog", path: "/blog" },
      { name: "About", path: "/about" },
      { name: "Contact", path: "/contact" },
      { name: "StyleGuide", path: "/styleGuide" },
      { name: "BeBi", path: "/BeBi" }
    ];
    const topMenuRef = useRef<HTMLUListElement | null>(null);
    const toggleMenuIconRef = useRef<SVGSVGElement | null>(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    useEffect(() => {
      const handleClick = (e: MouseEvent) => {
        const topMenu = topMenuRef.current;
        const toggleMenuIcon = toggleMenuIconRef.current;
  
        if (toggleMenuIcon && toggleMenuIcon.contains(e.target as Node)) {
          setIsMenuOpen(prev => !prev);
        } else if (topMenu && !topMenu.contains(e.target as Node)) {
          setIsMenuOpen(false);
        }
      };
      document.addEventListener('click', handleClick);
      return () => {
        document.removeEventListener('click', handleClick);
      };
    }, []);
    return (
        <>
             <header className='p-6 mx-auto'>
          <nav className='flex flex-row justify-between relative'>
            <div className='logo basis-2/6 text-center text-xl font-semibold cursor-pointer'>
              GauCoffee.
            </div>
            <ul
              ref={topMenuRef}
              className={`basis-3/6 lg:basis-1/6 ${isMenuOpen ? 'bb-topmenu-expanded' : 'hidden'} lg:flex lg:items-center lg:justify-end lg:gap-8 uppercase text-sm text-gray-500 font-medium`}>
              {links.map(link => (
                //bb-top-menu-item-active dùng useState cho nó nếu dường dẫn == trang thì =bb-top-menu-item-active
                <li key={link.path} className={`bb-top-menu-item ${pathname === link.path ? 'bb-top-menu-item-active' : ''}`}>
                  <a href={link.path}>{link.name}</a>
                </li>
              ))}
            </ul>
            <ul className='basis-1/6 flex lg:justify-start justify-end items-center ml-16 uppercase text-sm text-gray-500 font-medium'>
              <li id='bb-top-menu-item' className='bb-top-menu-item'>
                <a href="#" className='flex items-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="bb-icon">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                  </svg>
                  <span className='mx-2'>Cart</span>
                  <span className='bb-badge bg-slate-600 text-white'>99</span>+
                </a>
              </li>
            </ul>
            <div className='basis-1/6 lg:hidden flex items-center cursor-pointer px-2 sm:px-4'>
              <svg
                ref={toggleMenuIconRef}
                id='bb-top-tonggle-menu-icon'
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="bb-icon">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
              </svg>
            </div>
          </nav>
        </header>
        </>
    )
}