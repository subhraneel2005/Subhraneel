import React from 'react';
import b from '../assets/b.jpg';
import d from '../assets/d.jpg';
import two from '../assets/two.jpg'

function Projects() {
  return (
    <div className='h-screen w-full flex justify-center items-center select-none'>
        <div className='h-full w-full flex justify-center items-center gap-5 flex-wrap'>

            <div className='w-[350px] h-[400px] rounded-xl flex justify-center items-center text-sky-200 bg-sky-800'>
                <div className='block p-4'>
                    <h1 className='text-4xl font-bold text-center text-sky-100 mb-[50px]'>Ecommerce Website</h1>
                    <img src={d} alt=""  className='w-[80%] h-[50%] ml-8'/>
                    <ul>
                    <li className='text-3xl font-bold text-center cursor-pointer hover:text-white duration-300 decoration-white'><a href="https://subhraneel-ecommerce.vercel.app/" target='blank'>Live Demo</a></li>
                    <li className='text-3xl font-bold text-center cursor-pointer hover:text-white duration-300 decoration-white'><a href="https://github.com/subhraneel2005/Ecommerce" target='blank'>GitHub repo</a></li>
                        <li className='text-xl font-bold text-center'>Ecommerce website made using React Js.</li>
                    </ul>
                </div>
            </div>

            <div className='w-[350px] h-[400px] rounded-xl flex justify-center items-center bg-sky-800 text-sky-200'>
                <div className='block p-4'>
                    <h1 className='text-4xl font-bold text-center text-sky-100
                    mb-[50px]'>Food Ordering Website</h1>
                    <img src={b} className='w-[80%] h-[50%] ml-8' alt="" />
                    <ul>
                        <li className='text-3xl font-bold text-center hover:text-white duration-300  cursor-pointer decoration-sky-500'><a href="https://my-indian-burgers-website.vercel.app/" target='blank'>Live Demo</a></li>
                        <li className='text-3xl font-bold text-center cursor-pointer hover:text-white duration-300 decoration-white'><a href="https://github.com/subhraneel2005/My-Indian-Burgers-Website" target='blank'>GitHub repo</a></li>
                        <li className='text-xl font-bold text-center'>A simple food ordering website made using React js</li>
                    </ul>
                </div>
            </div>

            <div className='w-[350px] h-[400px] rounded-xl flex justify-center items-center text-sky-200 bg-sky-800'>
                <div className='block p-4'>
                    <h1 className='text-4xl font-bold text-center text-sky-100 mb-[50px]'>Wisdomie</h1>
                    <img src={d} alt=""  className='w-[80%] h-[50%] ml-8'/>
                    <ul>
                    <li className='text-3xl font-bold text-center cursor-pointer hover:text-white duration-300 decoration-white'><a href="https://wisdomie.vercel.app/" target='blank'>Live Demo</a></li>
                    <li className='text-3xl font-bold text-center cursor-pointer hover:text-white duration-300 decoration-white'><a href="https://github.com/subhraneel2005/Wisdomie" target='blank'>GitHub repo</a></li>
                        <li className='text-xl font-bold text-center'>A website which provides free resources for learning computer science related topics</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects