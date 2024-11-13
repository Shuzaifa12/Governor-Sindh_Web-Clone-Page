import React from 'react';
import Image from 'next/image';
import fb from '../socialicons/facebook.png';
import email from '../socialicons/email.png';
import youtube from '../socialicons/youtube.png';
import twitter from '../socialicons/twitter.png';
import tiktok from '../socialicons/tiktok.png';
import insta from '../socialicons/instagram.png'

const Footer = () => {
  return (
    <div className='mt-20 w-full bg-zinc-100 print-hidden'>
        <div className='m-auto w-[95%] py-20 lg:w-[90%] xl:w-[1300px]'>
            <div className='grid grid-cols-1 gap-10 md:grid-cols-3'>
                <div className='text-zinc-800'>
                    <h1 className='text-xl font-bold'>Core Courses</h1>
                    <div className='mt-5 flex flex-col gap-3 text-sm md:text-base'>
                        <a href="">Programming Fundamentals</a>
                        <a href="">Web2 Using Next js</a>
                        <a href="">Earn as You Learn</a>
                    </div>
                </div>
                <div className='text-zinc-800'>
                <h1 className='text-xl font-bold'>Advanced Courses</h1>
                    <div className='mt-5 flex flex-col gap-3 text-sm md:text-base'>
                        <a href="">Web 3 and Metaverse</a>
                        <a href="">Cloud-Naticve Computing</a>
                        <a href="">Artificial Intelligence (AI) and Deep Learning</a>
                        <a href="">Ambient Computing and IoT</a>
                        <a href="">Geonomics and Bioinformatics</a>
                        <a href="">Network Programmability and Automation</a>
                    </div>
                </div>
                <div className='text-zinc-800'>
                <h1 className='text-xl font-bold'>Social Links</h1>
                <div className='my-5 flex gap-3 md:text-sm'>
                    <a href="" target='_blank' className='flex h-8 w-8 items-center justify-center rounded-full bg-[#4267B2] text-white'>
                        <Image src={fb} alt='loading' width={40} height={40}></Image>
                    </a>
                    <a href="" target='_blank' className='flex h-8 w-8 items-center justify-center rounded-full bg-[#FF0000] text-white'>
                        <Image src={youtube} alt='loading' width={40} height={40}></Image>
                    </a>
                    <a href="" target='_blank' className='flex h-8 w-8 items-center justify-center rounded-full bg-[#1DA1F2] text-white'>
                        <Image src={twitter} alt='loading' width={40} height={40}></Image>
                    </a>
                    <a href="" target='_blank' className='flex h-8 w-8 items-center justify-center rounded-full text-white'>
                        <Image src={insta} alt='loading' width={40} height={40}></Image>
                    </a>
                    <a href="" target='_blank' className='flex h-8 w-8 items-center justify-center rounded-full text-white'>
                        <Image src={tiktok} alt='loading' width={40} height={40}></Image>
                    </a>
                </div>
                <a href="" target='_blank' className='mt-4 flex items-center py-1 text-main underline'>
                    <div className='mr-3 h-6 w-6'>
                        <Image src={email} alt='loading' width={40} height={40} ></Image>
                    </div>
                    education@governorsindh.com
                </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer