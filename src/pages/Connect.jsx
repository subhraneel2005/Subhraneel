import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

function Connect() {
  return (
    <div className='h-screen w-full flex justify-center items-center bg-emerald-500 select-none'>
        <div className='h-full w-full flex justify-center items-center p-6'>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-10'>
            <div className='text-2xl text-emerald-900 cursor-pointer'><a href="https://www.linkedin.com/in/subhraneel-goswami-599931282/" target='blank'>Linked In <FaLinkedin size={30}/></a></div>
            <div className='text-2xl text-emerald-900 cursor-pointer'><a href='mailto:subhraneeljobs@gmail.com' target='blank'>Email <MdEmail size={30}/></a></div>
            <div className='text-2xl text-emerald-900 cursor-pointer'><a href="https://twitter.com/Subhraneel55545" target='blank'>Twitter <FaXTwitter size={30}/></a></div>
            <div className='text-2xl text-emerald-900 cursor-pointer'><a href="https://github.com/subhraneel2005" target='blank'>GitHub <FaGithub size={30}/></a></div>
            </div>
        </div>
    </div>
  )
}

export default Connect