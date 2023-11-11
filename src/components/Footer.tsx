import {BsLinkedin}  from "react-icons/bs"
import {FaGithub}   from "react-icons/fa"
import Link from 'next/link'

import React from 'react'

function Footer() {
  return (
    <div className="max-w-5xl mx-auto p-4 my-10">


{/* main */}

        <div className="flex  justify-between items-center px-5">

            {/* left*/}
            <div>

                <h1 className="text-xl text-blue-500 font-extrabold">Abdiladiif salah</h1>


            </div>
            {/* right */}
            <div>

            <div  className='flex space-x-5 mt-5 px-16 md:px-0'>

<Link  href= "https://www.linkedin.com">

    <BsLinkedin  className = "text-2xl hover:text-blue-800 transition-all duration-500"/>
</Link>
<Link href= "https://github.com/Eng-Abdiladiif/Portifilo">

    <FaGithub  className = "text-2xl hover:text-blue-800 transition-all duration-500"/>
</Link>



</div>
            
            
            </div>





        </div>




    </div>
  )
}

export default Footer