import React from 'react'

function Skills() {
  return (
    <div className='h-screen w-full flex justify-center items-center bg-lime-500'>
        <div className='h-full w-full flex justify-center items-center gap-5 flex-wrap'>
            <div className='w-[300px] h-[350px] rounded-xl flex justify-center items-center bg-lime-800 p-4 text-lime-200'>
                <div className='block'>
                    <h1 className='text-4xl font-bold text-center text-lime-100
                    mb-[50px]'>Coding Skills</h1>
                    <ul>
                        <li className='text-3xl font-bold text-center'>JavaScript</li>
                        <li className='text-3xl font-bold text-center'>React JS</li>
                        <li className='text-3xl font-bold text-center'>Node JS</li>
                    </ul>
                </div>
            </div>

            <div className='w-[300px] h-[350px] rounded-xl flex justify-center items-center text-lime-200 bg-lime-800 p-4'>
                <div className='block'>
                    <h1 className='text-4xl font-bold text-center text-lime-100 mb-[50px]'>Design and Animations</h1>
                    <ul>
                        <li className='text-3xl font-bold text-center'>HTML5</li>
                        <li className='text-3xl font-bold text-center'>CSS</li>
                        <li className='text-3xl font-bold text-center'>Tailwind CSS</li>
                        <li className='text-3xl font-bold text-center'>Framer Motion</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills