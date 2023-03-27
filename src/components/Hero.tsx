import Image from 'next/image'

import { BiRightArrowAlt } from 'react-icons/bi';

import pfp from '../../public/captinturtle.png';

export default function Home() {
  return (
    <div className='w-screen h-screen min-h-[1000px] flex bg-red-400 text-white'>
      <div className='m-auto flex flex-col lg:flex-row gap-16'>
        <Image alt='Profile Picture' quality={100} src={pfp} className='rounded-2xl w-96 drop-shadow-lg m-auto lg:m-auto'/>
        <div className='flex flex-col gap-5 my-auto'>
          <div className='text-5xl font-bold m-auto lg:m-0'>Hello👋</div>
          <div className='text-lg text-center lg:text-left max-w-[500px] p-10 lg:p-0'>Hi, I am Austin. I make websites and other front-end applications. I do back-end but mostly front-end. I primarily use NextJS and Tailwind for my projects. This is my portfolio website.</div>
          <div className='m-auto lg:m-0 flex text-white hover:translate-x-1 transition-all'>
            <a href='https://github.com/captinturtle1' className='text-2xl cursor-pointer flex'>View Github <BiRightArrowAlt className='my-[5px]'/></a>
          </div>
        </div>
      </div>
    </div>
  )
}