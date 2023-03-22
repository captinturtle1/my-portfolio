import { useState } from 'react';
import Image from 'next/image'

import abyssLogo from '../../public/abyssLogo.png';
import jsLogo from '../../public/jsLogo.png';
import yvLogo from '../../public/yvLogo.png';
import mintyLogo from '../../public/mintyLogo.png';

import { projectDetails } from './projectDetails';

import { BiRightArrowAlt } from 'react-icons/bi';

export default function Projects() {
    const [expanded, setExpanded] = useState(-1);   

    const handleExpansion = (index:number) => {
        if (index == expanded) {
            setExpanded(-1)
        } else{
            setExpanded(index)
        }
    }

    return (
        <div className='w-screen h-[1500px] lg:h-[2000px] flex flex-col bg-slate-800 text-white p-16 overflow-hidden'>
            <div className='mx-auto text-4xl text-slate-200 font-semibold p-16'>Projects</div>
            <div className='flex flex-col gap-16 lg:gap-32'>
                {projectDetails.map((project, index) => 
                    <div onClick={() => handleExpansion(index)} className={
                        project.name == 'Abyss' ? 
                            (expanded == index ? 
                                'mx-auto bg-[#E2C05E] lg:w-[800px] h-[620px] rounded-3xl rounded-tl-[30px] cursor-pointer transition-all' : 
                                'mx-auto bg-[#E2C05E] lg:w-[800px] h-32 lg:h-[250px] rounded-3xl rounded-l-[30px] cursor-pointer transition-all'
                            ) :
                            project.name == 'Minty' ? 
                                (expanded == index ? 
                                    'mx-auto bg-[#305187] lg:w-[800px] h-[600px] rounded-3xl rounded-tl-[30px] cursor-pointer transition-all' : 
                                    'mx-auto bg-[#305187] lg:w-[800px] h-32 lg:h-[250px] rounded-3xl rounded-l-[30px] cursor-pointer transition-all'
                                ) :
                                project.name == 'JPEG Squared' ? 
                                    (expanded == index ? 
                                        'mx-auto bg-[#2E0910] lg:w-[800px] h-[600px] rounded-3xl rounded-tl-[30px] cursor-pointer transition-all' : 
                                        'mx-auto bg-[#2E0910] lg:w-[800px] h-32 lg:h-[250px] rounded-3xl rounded-l-[30px] cursor-pointer transition-all'
                                    ) :
                                    project.name == 'Yogurt Verse' ? 
                                        (expanded == index ? 
                                            'mx-auto bg-[#D1737F] lg:w-[800px] h-[620px] rounded-3xl rounded-tl-[30px] cursor-pointer transition-all' : 
                                            'mx-auto bg-[#D1737F] lg:w-[800px] h-32 lg:h-[250px] rounded-3xl rounded-l-[30px] cursor-pointer transition-all'
                                        ) :
                                        (expanded == index ? 
                                            'mx-auto bg-[#305187] lg:w-[800px] h-[600px] rounded-3xl rounded-tl-[30px] cursor-pointer transition-all' : 
                                            'mx-auto bg-[#305187] lg:w-[800px] h-32 lg:h-[250px] rounded-3xl rounded-l-[30px] cursor-pointer transition-all'
                                        )}>
                        <div className='flex'>
                            <Image alt='Minty logo' src={project.logo} className='h-32 w-32 lg:h-[250px] lg:w-[250px] rounded-3xl'/>
                            <div className='lg:mt-8 p-8 md:p-6 lg:p-8 select-none'>
                                <div className='text-xl md:text-4xl lg:text-7xl font-bold mb-4'>{project.name}</div>
                                <div className='text-sm md:text-lg lg:text-2xl font-semibold'>{project.tags}</div>
                            </div>
                        </div>
                        <div className={expanded == index ? 'mx-16 mt-16 text-sm  md:text-xl visible opacity-100 transition-all duration-300' : 'mx-16 mt-16 text-sm lg:text-xl invisible opacity-0 transition-all -translate-y-16 duration-75'}>
                            <div>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </div>
                            {project.websiteURL != '' ? (
                                <div className='flex mt-8 font-bold text-lg'>
                                    <a href={project.websiteURL} className='flex translate-x-0 hover:translate-x-2 transition-all'>
                                        Visit site <BiRightArrowAlt className='mt-[6px]'/>
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