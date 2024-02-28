import React from 'react'
import bgImg from '../assets/bgImg.jpg'
import { useNavigate } from 'react-router-dom';
import Connect from './Connect';

function HomePage() {

    const navigate = useNavigate();

    const skills = '/skills';
    const projects = '/projects';
    const contacts = '/contacts'
  return (
    <div className="relative h-screen select-none">
      <img src={bgImg} className="absolute inset-0 w-full h-full object-cover brightness-50 bg-cover">
      </img>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className='block mt-24'>
            <h1 className="text-[7vw] text-center font-bold text-white glow">S U B H R A N E E L</h1>
            <h1 className="text-[4vw] text-center font-bold text-white glowtwo">React Developer</h1>

            <div className='flex justify-evenly mt-10 gap-4'>
                <button className='black-glow px-4 py-2 rounded-xl text-[3vw] cursor-pointer text-blue-300'
                onClick={() => navigate(skills)}
                >Skills</button>
                <button className='black-glow px-4 py-2 rounded-xl text-[3vw] cursor-pointer text-blue-300'
                onClick={() => navigate(projects)}
                >Projects</button>
                <button className='black-glow px-4 py-2 rounded-xl text-[3vw] cursor-pointer text-blue-300'
                onClick={() => navigate(contacts)}
                >Let's Connect</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage