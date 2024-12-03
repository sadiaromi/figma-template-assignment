"use client";
import { useState } from "react";
import Image from "next/image";

const Navbar = () => {
 const [isOpen, setIsOpen] = useState(false); 

 return (
 <header className="bg-white px-4 py-3 shadow-md">
 <div className="max-w-7xl mx-auto flex items-center justify-between">
 {/* Logo */}
 <Image
 src="/images/fashion.logo.png"
 alt="LOGO"
 width={236.26}
 height={60}
 />

 {/* Navigation + Sign-Up */}
 <div className="hidden md:flex md:items-center md:space-x-8">

 <nav className="flex space-x-8">
 <a href="#" className="hover:text-yellow-500 font-medium">CATALOGUE</a>
 <a href="#" className="hover:text-yellow-500 font-medium">FASHION</a>
 <a href="#" className="hover:text-yellow-500 font-medium">FAVOURITE</a>
 <a href="#" className="hover:text-yellow-500 font-medium">LIFESTYLE</a>
 </nav>

 <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
 SIGN UP
 </button>
 </div>

 {/* Hamburger Icon (Visible on small screens) */}
 <div className="md:hidden">
 <button
 onClick={() => setIsOpen(!isOpen)}
 className="focus:outline-none"
 >
 <div className="space-y-1">
 <span className="block w-6 h-0.5 bg-black"></span>
 <span className="block w-6 h-0.5 bg-black"></span>
 <span className="block w-6 h-0.5 bg-black"></span>
 </div>
 </button>
 </div>
 </div>

 {/* Dropdown Menu (Small Screens) */}
 {isOpen && (
 <div className="md:hidden mt-4">
 <nav className="flex flex-col space-y-2">
 <a href="#" className="block px-4 py-2 hover:text-yellow-500 font-medium">CATALOGUE</a>
 <a href="#" className="block px-4 py-2 hover:text-yellow-500 font-medium">FASHION</a>
 <a href="#" className="block px-4 py-2 hover:text-yellow-500 font-medium">FAVOURITE</a>
 <a href="#" className="block px-4 py-2 hover:text-yellow-500 font-medium">LIFESTYLE</a>

 <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
  SIGN UP
 </button>
 </nav>
 </div>
 )}

 </header>
 
 );
};

export default Navbar;

