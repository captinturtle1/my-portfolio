import Head from 'next/head'

import Hero from '../components/Hero';
import Projects from '../components/Projects';

export default function Home() {
  return (
    <div className='w-screen h-screen bg-slate-900 text-white'>
      <Head>
        <title>My Portfolio</title>
      </Head>
      <Hero/>
      <Projects/>
    </div>
  )
}