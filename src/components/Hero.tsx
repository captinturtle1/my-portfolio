import Image from 'next/image'

import { BiRightArrowAlt } from 'react-icons/bi';

import pfp from '../../public/me.jpg';

export default function Home() {
  return (
    <div className='w-screen flex py-8 lg:p-32 bg-red-400 text-white'>
      <div className='m-auto flex flex-col lg:flex-row gap-16'>
        <Image alt='Profile Picture' quality={100} src={pfp} className='rounded-2xl w-[80%] lg:w-96 drop-shadow-lg m-auto lg:m-auto'/>
        <div className='flex flex-col gap-5 my-auto max-w-[600px]'>
          <h1 className='text-5xl font-bold m-auto lg:m-0'>Hello👋</h1>
          <p className='text-lg text-center lg:text-left px-10 lg:p-0'>Hi, I&apos;m Austin Lopez, a full-stack developer with a passion for creating dynamic and intuitive web applications. With several years of experience in both front-end and back-end development, I have the skills and knowledge necessary to take a project from concept to completion.</p>
          <p className='text-lg text-center lg:text-left px-10 lg:p-0'>I have several years of experience in both front-end and back-end development. My technical skills include proficiency in programming languages such as JavaScript, Typescript, HTML, CSS, as well as experience with popular frameworks and libraries like React, Node.js, Next.js, and Tailwindcss.</p>
          <button type='button' className='m-auto lg:m-0 flex text-white hover:translate-x-1 transition-all'>
            <a href='https://github.com/captinturtle1' target='_blank' className='text-2xl cursor-pointer flex'>View Github <BiRightArrowAlt className='my-[5px]'/></a>
          </button>
        </div>
      </div>
    </div>
  )
}