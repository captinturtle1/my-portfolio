import Head from 'next/head'
import Image from 'next/image'

import { FaGithub } from 'react-icons/fa';

import pfp from '../../public/captinturtle.png';

export default function Home() {
  return (
    <div className='w-screen h-screen flex bg-slate-900 text-white'>
      <Head>
        <title>captinturtle portfolio</title>
      </Head>
      <div className='m-auto flex flex-col lg:flex-row gap-16'>
        <Image alt='Profile Picture' src={pfp} className='rounded-2xl drop-shadow-lg m-auto lg:m-auto'/>
        <div className='flex flex-col gap-5 my-auto'>
          <div className='text-5xl font-bold m-auto lg:m-0'>captinturtle</div>
          <div className='text-lg text-center lg:text-left max-w-[500px] p-10 lg:p-0'>Hello, i am captinturtle and i make websites and stuff. This is my portfolio with previous work :)</div>
          <div className='m-auto lg:m-0 flex text-white hover:text-zinc-300 transition-all'>
            <a href='https://github.com/captinturtle1' className='text-4xl cursor-pointer'><FaGithub/></a>
          </div>
        </div>
      </div>
    </div>
  )
}
