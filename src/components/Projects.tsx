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
        <div className='w-screen h-[2000px] flex flex-col bg-slate-800 text-white p-16'>
            <div className='mx-auto text-4xl text-slate-200 font-semibold p-16'>Projects</div>
            <div className='flex flex-col gap-32'>
                {projectDetails.map((project, index) => 
                    <div onClick={() => handleExpansion(index)} className={
                        project.name == 'Abyss' ? 
                            (expanded == index ? 
                                'mx-auto bg-[#E2C05E] w-[800px] h-[600px] rounded-3xl rounded-tl-[30px] cursor-pointer transition-all' : 
                                'mx-auto bg-[#E2C05E] w-[800px] h-[250px] rounded-3xl rounded-l-[30px] cursor-pointer transition-all'
                            ) :
                            project.name == 'Minty' ? 
                                (expanded == index ? 
                                    'mx-auto bg-[#305187] w-[800px] h-[600px] rounded-3xl rounded-tl-[30px] cursor-pointer transition-all' : 
                                    'mx-auto bg-[#305187] w-[800px] h-[250px] rounded-3xl rounded-l-[30px] cursor-pointer transition-all'
                                ) :
                                project.name == 'JPEG Squared' ? 
                                    (expanded == index ? 
                                        'mx-auto bg-[#2E0910] w-[800px] h-[600px] rounded-3xl rounded-tl-[30px] cursor-pointer transition-all' : 
                                        'mx-auto bg-[#2E0910] w-[800px] h-[250px] rounded-3xl rounded-l-[30px] cursor-pointer transition-all'
                                    ) :
                                    project.name == 'Yogurt Verse' ? 
                                        (expanded == index ? 
                                            'mx-auto bg-[#D1737F] w-[800px] h-[600px] rounded-3xl rounded-tl-[30px] cursor-pointer transition-all' : 
                                            'mx-auto bg-[#D1737F] w-[800px] h-[250px] rounded-3xl rounded-l-[30px] cursor-pointer transition-all'
                                        ) :
                                        (expanded == index ? 
                                            'mx-auto bg-[#305187] w-[800px] h-[600px] rounded-3xl rounded-tl-[30px] cursor-pointer transition-all' : 
                                            'mx-auto bg-[#305187] w-[800px] h-[250px] rounded-3xl rounded-l-[30px] cursor-pointer transition-all'
                                        )}>
                        <div className='flex'>
                            <Image alt='Minty logo' src={project.logo} className='h-[250px] w-[250px] rounded-3xl'/>
                            <div className='mt-8 p-8 select-none'>
                                <div className='text-7xl font-bold mb-4'>{project.name}</div>
                                <div className='text-2xl font-semibold'>{project.tags}</div>
                            </div>
                        </div>
                        <div className={expanded == index ? 'p-16 text-xl visible opacity-100 transition-all duration-300' : 'p-16 text-xl invisible opacity-0 transition-all -translate-y-16 duration-75'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                    </div>
                )}
            </div>
        </div>
    )
}