import { useState } from 'react';
import Image from 'next/image'

import abyssLogo from '../../public/abyssLogo.png';
import jsLogo from '../../public/jsLogo.png';
import yvLogo from '../../public/yvLogo.png';
import mintyLogo from '../../public/mintyLogo.png';

import { projectDetails } from './projectDetails';

import { BiRightArrowAlt } from 'react-icons/bi';

export default function Projects() {
    return (
        <div className=' w-screen p-16 flex flex-col text-white overflow-hidden relative'>
            <div className='absolute w-[200%] h-[200%] -left-[50%] -top-[50%] bg-gradient-to-br from-gray-700 via-gray-900 to-black'/>
            <div className='mx-auto text-3xl lg:text-6xl text-white font-semibold p-16 z-20'>Projects</div>
            <div className='flex flex-col gap-16 lg:gap-32 z-10'>
                {projectDetails.map((project, index) => 
                    <div key={project.name} className={
                        project.name == 'Abyss' ? 
                                'mx-auto bg-[#E2C05E] lg:w-[800px] bg-opacity-50 border p-4 pb-8 border-[#E2C05E] rounded-3xl' : 
                                project.name == 'otk.lol' ? 
                                    'mx-auto bg-[#FFC31F] lg:w-[800px] bg-opacity-50 border p-4 pb-8 border-[#FFC31F] rounded-3xl' :  
                                    project.name == 'Minty' ? 
                                        'mx-auto bg-[#305187] lg:w-[800px] bg-opacity-50 border p-4 pb-8 border-[#305187] rounded-3xl' : 
                                            project.name == 'Yogurt Verse' ? 
                                                'mx-auto bg-[#D1737F] lg:w-[800px] bg-opacity-50 border p-4 pb-8 border-[#D1737F] rounded-3xl' : 
                                                ''}>
                        <div className='flex'>
                            <Image alt='Minty logo' src={project.logo} className='h-24 w-24 lg:h-[220px] lg:w-[220px] rounded-3xl'/>
                            <div className='lg:mt-5 p-4 md:p-2 md:px-8 lg:p-8 select-none'>
                                <div className='text-xl md:text-4xl lg:text-7xl font-bold mb-4'>{project.name}</div>
                                <div className='text-sm md:text-lg lg:text-2xl font-semibold'>{project.tags}</div>
                            </div>
                        </div>
                        <div className='mx-16 mt-8 text-sm  md:text-xl visible opacity-100 transition-all duration-300'>
                            <div className='whitespace-pre-wrap'>{project.desc}</div>
                            {project.websiteURL != '' ? (
                                <div className='flex mt-8 font-bold text-lg'>
                                    <a href={project.websiteURL} className='flex translate-x-0 hover:translate-x-2 transition-all'>
                                        Visit site <BiRightArrowAlt className='mt-2'/>
                                    </a>
                                </div>
                            ):(<></>)}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}