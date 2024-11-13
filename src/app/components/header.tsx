"use client"
import React from 'react';
import Image from 'next/image';
import logo from '../logo.png';
import { useState } from 'react';

const Header = () => {
    const [isMenuopen, setisMenuopen] = useState(false);

    const handlemenutoggle = () =>{
        setisMenuopen(!isMenuopen)
    }
  return (
    <nav className='sticky top-0 z-30 w-full bg-[rgb(4,78,131)]'>
        <div className='m-auto flex h-16 w-[95%] items-center justify-between md:h-20 lg:w-[90%] xl:w-[1300px]'>
            <a href="/">
            <Image src={logo} alt='logo' width={90} height={113} className='mt-14 w-[70px] sm:mt-20 sm:w-[80px] md:w-[90]'></Image>
            </a>

            <h1 className='hidden text-[15px] font-extrabold text-[#b9d8f3] lg:block xl-lg:text-lg xl:text-2xl'>Tution Free Education Program on Latest Technologies</h1>

            <h1 className='text-[1.125rem] font-extrabold text-[#b9d8f3] lg:hidden'>Tution Free Program</h1>

            <div className='hidden items-center gap-5 text-[#FAF9F6] sm:flex lg:gap-10'>
                <a href="/" className='capitalize'>home</a>
                <a href="/apply" className='capitalize'>apply</a>
                <a href="/jobs" className='capitalize'>jobs</a>
                <a href="/result" className='capitalize'>result</a>
                <a href="/courses" className='capitalize'>courses</a>
            </div>

            <div className='block sm:hidden' onClick={handlemenutoggle}>
                {isMenuopen ? (
                    <div className='left-0 top-0 z-40 h-full w-full bg-[rgb(4,78,131)]'>
                        <div className='absolute right-5 top-8'>
                            <div className='w-5 h-[2px] bg-white  rounded-md rotate-[45deg]'></div>
                            <div className='w-5 h-[2px] bg-white mt-[-1px] rounded-md rotate-[-45deg]'></div>
                        </div>
                       
                    </div>
                ) : (
                    <div>
                        <div className='w-5 h-[2px] bg-white my-1 rounded-md'></div>
                        <div className='w-5 h-[2px] bg-white my-1 rounded-md'></div>
                        <div className='w-5 h-[2px] bg-white my-1 rounded-md'></div>
                    </div>
                )
            }
            </div>
        </div>

           {isMenuopen && (
            <div className='m-auto mt-10 flex w-[90%] flex-col text-base font-normal text-white'>
                <a href="/">
                <div className='border-b border-[#1468a5] py-5 capitalize'>home</div>
                </a>
                <a href="/apply"> <div className='border-b border-[#1468a5] py-5 capitalize'>apply</div></a>
                <a href="/jobs">
                <div className='border-b border-[#1468a5] py-5 capitalize'>jobs</div>
                </a>
                <a href="/result">
                <div className='border-b border-[#1468a5] py-5 capitalize'>results</div>
                </a>
                <a href="/courses">
                <div className='border-b border-[#1468a5] py-5 capitalize'>courses</div></a>
            </div>
           )} 
    </nav>
  )
}

export default Header;