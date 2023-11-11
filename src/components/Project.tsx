"use client"

import Image from 'next/image'
import React, { useEffect } from 'react'
import one   from "../../public/image/one.png"
import two  from "../../public/image/two.png"
import {BsGithub}  from  "react-icons/bs"
import {RiShareBoxFill}  from  "react-icons/ri"
import Link from 'next/link'
import   Aos   from "aos"
import  "aos/dist/aos.css"


function Project() {


    useEffect(()  => {

        Aos.init({duration:1000})
    })
  return (
    <div  id='section-Project' className='max-w-4xl mx-auto p-4 mt-60' >


        {/* main */}

        <div>

            {/* left */}
            <div>

                <h1 className='font-chela font-extrabold text-2xl px-10 md:px-0 '>Each project is a unique piece  for Development</h1>


            </div>
            {/* right */}
            <div className='flex flex-col space-y-10 mt-10'>


                {/* one */}
                <div className='flex flex-col md:flex-row justify-between items-center space-x-5 space-y-10'>

                    <div>
                        <Image src={one}  className='max-w-lg' width={0} height={0}  alt='iamge'/>
                    </div>
                    <div>
                    <div className=' px-10 md:px-0'
                    data-aos = "fade-left">
                    <p className='font-DM leading-7 '> <span className='bg-blue-500 text-white'> Al-Madiina </span> E-commerce waa small project 
                        kaso  ku shaqaynaya Qab onlien ah weli Dhamaytrikiisa lagu
                        Gudo jiraa waxan laga helay Dhaman dharka kala duwan
                       Ee <span>[raga & dumarka]</span>
                    </p>
                    <div className='flex space-x-10  my-5 items-center'>

                    <div className='flex space-x-3'>
                        <h1 className='font-DM font-extrabold text-xl'>Code</h1>
                        <BsGithub className = "text-2xl"/>

                    </div>
                    <div className='flex space-x-3'>
                        <h1 className='font-DM font-extrabold text-xl'>Live</h1>
                       <Link href= "https://ai-madiina.vercel.app/">
                       <RiShareBoxFill className = "text-2xl"/>
                       </Link>

                    </div>


                    </div>
                </div>
                    </div>


                </div>
                {/* two */}
                <div className='flex flex-col-reverse  md:flex-row mt-10 justify-between items-center space-x-5 space-y-10'>


<div>
<div className=' px-10 md:px-0 mt-10 md:mt-0'
data-aos = "fade-right">
<p className='font-DM leading-7 '> <span className='bg-blue-500 text-white'> Al-baraka  </span> E-commerce waa small project 
    kaso  ku shaqaynaya Qab onlien ah weli Dhamaytrikiisa lagu
    Gudo jiraa waxan laga helay Dhaman cunooynka kala duwan
   Ee <span>[cunooyinka khdrada ah & cunooyinka fuduud]</span>
</p>
<div className='flex space-x-10  my-5 items-center'>

<div className='flex space-x-3'>
    <h1 className='font-DM font-extrabold text-xl'>Code</h1>
    <BsGithub className = "text-2xl"/>

</div>
<div className='flex space-x-3'>
    <h1 className='font-DM font-extrabold text-xl'>Live</h1>
   
    <Link href= "https://al-baraka-react-js-h7ud.vercel.app/">
    <RiShareBoxFill className = "text-2xl"/>
    </Link>
</div>


</div>
</div>
</div>
<div>
    <Image src={two}  className='max-w-lg' width={0} height={0}  alt='iamge'/>
</div>


</div>
                {/* three */}




            </div>
        </div>




    </div>
  )
}

export default Project