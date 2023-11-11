"use client"

import React, { useEffect } from 'react'
import img   from "../../public/image/info.png"
import Image from 'next/image'
import   Aos   from "aos"
import  "aos/dist/aos.css"

function About() {

    useEffect(()  => {

        Aos.init({duration:1000})
    })
  return (
    
    
    <div id='section-About' className='max-w-4xl mx-auto p-4 my-20 '>


        {/* main */}
        <div className='flex  flex-col md:flex-row space-x-5 justify-between items-center'>

            {/* left */}
            


                <div className=''>

                    <Image src={img} className='max-w-lg' width={0} height={0} alt='img'/>

                </div>

            {/* right */}

            <div  className='md:w-1/2 px-5 space-y-3 '
            data-aos= "fade-left">

                
                <h1 className='font-Lilita text-blue-500 font-semibold'>Info</h1>
                <p className='font-DM leading-10'>magaaygu waa  <span className='text-blue-500 font-semibold'>[Abdiladiif salah] </span> waxan ahay
                    Arday barta  web developmentiga  waxan ahay arday barta luqada <span>next js</span>  kaso doonay inu noqo  fullsatck web developer </p>


            </div>






        </div>
       




    </div>

  )
}

export default About