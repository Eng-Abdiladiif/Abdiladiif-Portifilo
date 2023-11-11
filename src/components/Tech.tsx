import React from "react";
import html from "../../public/image/icons8-html-48.png";
import tailwind from "../../public/image/icons8-tailwind-css-48.png";
import js from "../../public/image/icons8-javascript-48.png";
import prisma from "../../public/image/icons8-prisma-orm-50.png";
import nextjs from "../../public/image/next-js.png";
import mongoDb from "../../public/image/mongodb-icon-1.png";
import { BiLogoReact } from "react-icons/bi";
import Image from "next/image";

function Tech() {
  return (
    <div className="max-w-4xl mx-auto p-4 mt-10">
      {/* main */}
      <div className="flex space-x-5 items-center px-5 md:px-0">
        {/* left */}
        <div>
          <h1 className="font-semibold text-2xl">Tech |</h1>
        </div>
        {/* right */}
        <div className="flex space-x-6">
          {/* onr */}
          <div>
            <Image
              src={html}
              className="w-10 h-10"
              width={0}
              height={0}
              alt="image"
            />
          </div>
          <div>
            <Image
              src={tailwind}
              className="w-10 h-10"
              width={0}
              height={0}
              alt="image"
            />
          </div>
          <div>
            <Image
              src={js}
              className="w-10 h-10"
              width={0}
              height={0}
              alt="image"
            />
          </div>

          <div>
            <BiLogoReact  className = "text-4xl text-blue-700"/>
          </div>
          <div>
            <Image
              src={nextjs}
              className="w-10 h-10"
              width={0}
              height={0}
              alt="image"
            />
          </div>
          <div>
            <Image
              src={prisma}
              className="w-10 h-10"
              width={0}
              height={0}
              alt="image"
            />
          </div>
          <div>
            <Image
              src={mongoDb}
              className="w-10 h-10"
              width={0}
              height={0}
              alt="image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tech;
