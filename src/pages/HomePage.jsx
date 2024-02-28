import React from 'react'
import bgVideo from '../assets/bgVideo.mp4';
import bgAudio from '../assets/bgAudio.mp3';
import { useNavigate } from 'react-router-dom';
import Connect from './Connect';

function HomePage() {

    const navigate = useNavigate();

    const skills = '/skills';
    const projects = '/projects';
    const contacts = '/contacts'
  return (
    <div className="relative h-screen select-none">
      <video
        className="absolute inset-0 w-full h-full object-cover brightness-50"
        autoPlay
        muted
        loop
      >
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className='block'>
            <h1 className="text-[10vw] font-bold text-white glow">S U B H R A N E E L</h1>
            <h1 className="text-[6vw] text-center font-bold text-white glowtwo">React Developer</h1>

            <div className='flex justify-evenly mt-10'>
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