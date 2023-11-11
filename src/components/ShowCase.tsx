import React from 'react'
import  {AiOutlineTwitter,AiFillInstagram}  from  "react-icons/ai"
import {BiLogoFacebookCircle} from "react-icons/bi"
import  saiwr  from "../../public/image/awner.jpg"
import Image from 'next/image'
import {BsLinkedin}  from "react-icons/bs"
import {FaGithub}   from "react-icons/fa"
import Link from 'next/link'

function Showcase() {
  return (
    <div className='max-w-4xl mx-auto p-4 mt-10'>


     {/* main */}
     <div className='flex flex-col-reverse md:flex-row space-x-20 space-y-5 justify-between items-center'>
        {/* left */}
       
     
     {/* right */}
     <div className=''>

        <div className='flex flex-col  px-20 md:px-0 mt-10 space-y-10  '>

            <h1 className=' font-sans text-4xl  font-extrabold '>  I,M  Abdiladiif salah  <br />
            <span className='text-cyan-600 tracking-normal border-b-4 border-yellow-500 rounded-md'>FullStack</span> {" "}Dev 👋</h1>
            <p className='text-md font-DM leading-7   m'> My names is <span
            className='text-cyan-500 '>[Abdiladiif salah axmed] </span> I,m  <span className='text-cyan-600 font-bold'>[FullStack developer] 
          <br />  </span>  
            
         {" "} who  lives  in the city of Erigavo where he <br /> has been working for the last time  </p>
           

        </div>
        <div  className='flex space-x-5 mt-5 px-16 md:px-0'>

            <Link href= "https://www.linkedin.com">

                <BsLinkedin  className = "text-2xl hover:text-blue-800 transition-all duration-500"/>
            </Link>
            <Link href= "https://github.com/Eng-Abdiladiif/Portifilo">

                <FaGithub  className = "text-2xl hover:text-blue-800 transition-all duration-500"/>
            </Link>



        </div>


     </div>
     {/* midden */}
     <div className=''>

        <Image src={saiwr} className='w-[310px] h-[310px]  border-2 border-black 
        shadow-2xl shadow-gray-00 img ' width={0}  height={0} alt='img'/>


     </div>



     </div>
     




    </div>
  )
}

export default Showcase