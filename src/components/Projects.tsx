import { useState } from 'react';
import Image from 'next/image'

import { projectDetails } from './projectDetails'

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
    <div className='w-screen flex flex-col bg-slate-800 text-white p-16'>
        <div className='m-auto text-4xl text-slate-200 font-semibold p-16'>Projects</div>
        <div className='flex flex-col gap-16'>
            {projectDetails.map((project, index) => 
                <div onClick={() => handleExpansion(index)} key={project.name} className='bg-[#E2C05E] m-auto rounded-3xl p-8'>
                    {/*<Image alt={`${project.name} Logo`} src={project.logo} className='w-64 h-64 rounded-3xl z-20'/>*/}
                    <div className='w-[700px] px-10 m-auto z-20'>
                        <div className='text-6xl font-bold'>{project.name}</div>
                        <div className='flex gap-5'>
                            {project.tags.map(tag =>
                                <div key={tag} className=' font-semibold text-2xl'>{tag}</div>
                            )}
                        </div>
                        <div className={expanded == index ? 'block' : 'hidden'}>{project.desc}</div>
                    </div>
                </div>
            )}
        </div>
    </div>
  )
}