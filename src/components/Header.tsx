"use client"

import React, {useState} from "react";
import logo from "../../public/image/logo.png";
import Image from "next/image";
import Link from "next/link";
import  {HiMenuAlt3}  from  "react-icons/hi"
import  {GrFormClose}  from "react-icons/gr"
function Header() {

    const  [open , setOpen]  = useState(false)
  return (
    <div className="max-w-6xl mx-auto p-4 mt-5  ">
      {/* main */}
      <div className="flex justify-between items-center  ">
        {/* left */}
        <div>
          <Image src={logo} className="" width={0} height={0} alt="image" />
        </div>

        <div   className="md:hidden  z-50 cursor-pointer"
        onClick={()  =>  setOpen(!open)}>

            {

                open ? <GrFormClose className = "text-3xl hover:scale-125 transition-all text-blue-800 duration-300" /> : <HiMenuAlt3 
                className = "text-3xl hover:scale-125 transition-all text-blue-800 duration-300"/>
            }


        </div>
        {/* Desktop*/}
        <div className=" hidden md:flex space-x-5">
          <Link
            className="font-bold hover:scale-125 transition-all duration-300 hover:text-blue-700"
            href="/"
          >
            Home
          </Link>
          <Link
            className="font-bold hover:scale-125 transition-all duration-300 hover:text-blue-700"
            href="#section-About"
          >
            About
          </Link>
          <Link
            className="font-bold hover:scale-125 transition-all duration-300 hover:text-blue-700"
            href="#section-Project"
          >
            Project
          </Link>
          <Link
            className="font-bold hover:scale-125 transition-all duration-300 hover:text-blue-700"
            href="#section-contect"
          >
            Contect
          </Link>
        </div>

        {/* Mobile */}
        <div
          className={`flex flex-col md:hidden absolute top-0 right-0
        w-40 h-screen bg-gray-300 bg-opacity-30 justify-center items-center
        space-y-10   ${open ?"flex" : "hidden"}`}
        >
          <Link
            className="font-bold hover:scale-125 transition-all duration-300 hover:text-blue-700"
            href="/"
          >
            Home
          </Link>
          <Link
            className="font-bold hover:scale-125 transition-all duration-300 hover:text-blue-700"
            href="#section-About"
          >
            About
          </Link>
          <Link
            className="font-bold hover:scale-125 transition-all duration-300 hover:text-blue-700"
            href="#section-Project"
          >
            Project
          </Link>
          <Link
            className="font-bold hover:scale-125 transition-all duration-300 hover:text-blue-700"
            href="#section-contect"
          >
            Contect
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
