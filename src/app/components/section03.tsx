import React from 'react';
import Image from 'next/image';
import img1 from '../corecoursesimg/img1.jpg';
import img2 from '../corecoursesimg/img2.jpg';
import img3 from '../corecoursesimg/img3.jpg';
import img4 from '../advancedcoursesimg/i1.jpg';
import img5 from '../advancedcoursesimg/i2.jpg';
import img6 from '../advancedcoursesimg/i3.jpg';
import img7 from '../advancedcoursesimg/i4.jpg';
import img8 from '../advancedcoursesimg/i5.jpg';
import img9 from '../advancedcoursesimg/i6.jpg';

const Section03 = () => {
  return (
    <>
    <div className='xl:w-[1300px] lg:w-[90%] w-[95%] m-auto mt-10 mb-10'>
        <h1 className='lg:text-4xl sm:text-4xl text-2xl sm:text-left text-center text-main font-extrabold mt-10 text-[rgb(4,78,131)]'>Core Courses Sequence</h1>

        <div className='grid xl:grid-cols-4 lg:grid-cols-4 sm:grid-cols-3 xl-lg:gap-10 mt-10 gap-5'>
            <a href="" className='hover:scale-105 duration-200 transition-all'>
                <div className='overflow-hidden h-fit box-shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold border border-gray-500 '>
                    <div>
                        <Image src={img1} alt='loading' width={450} height={300} className='object-cover w-full'></Image>
                    </div>
                    <div className='px-4 flex justify-center items-center h-[70px]'>
                        <h1>Programming Fundamentals</h1>
                    </div>
                </div>
            </a>
            <a href="" className='hover:scale-105 duration-200 transition-all'>
                <div className='overflow-hidden h-fit box-shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold border border-gray-500 '>
                    <div>
                        <Image src={img2} alt='loading' width={450} height={300} className='object-cover w-full'></Image>
                    </div>
                    <div className='px-4 flex justify-center items-center h-[70px]'>
                        <h1>Web2 Using Next js</h1>
                    </div>
                </div>
            </a>
            <a href="" className='hover:scale-105 duration-200 transition-all'>
                <div className='overflow-hidden h-fit box-shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold border border-gray-500 '>
                    <div>
                        <Image src={img3} alt='loading' width={450} height={300} className='object-cover w-full'></Image>
                    </div>
                    <div className='px-4 flex justify-center items-center h-[70px]'>
                        <h1>Earn AS You Learn</h1>
                    </div>
                </div>
            </a>
        </div>
    </div>

    <div className='xl:w-[1300px] lg:w-[90%] w-[95%] m-auto mt-10 mb-10'>
    <h1 className='lg:text-4xl sm:text-4xl text-2xl sm:text-left text-center text-main font-extrabold mt-10 text-[rgb(4,78,131)]'>Advanced Courses</h1>

    <div className='grid xl:grid-cols-4 lg:grid-cols-4 sm:grid-cols-3 xl-lg:gap-10 mt-10 gap-5'>
            <a href="" className='hover:scale-105 duration-200 transition-all'>
                <div className='overflow-hidden h-fit box-shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold border border-gray-500 '>
                    <div>
                        <Image src={img4} alt='loading' width={450} height={300} className='object-cover w-full'></Image>
                    </div>
                    <div className='px-4 flex justify-center items-center h-[70px]'>
                        <h1>Artificial Intelligence</h1>
                    </div>
                </div>
            </a>
            <a href="" className='hover:scale-105 duration-200 transition-all'>
                <div className='overflow-hidden h-fit box-shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold border border-gray-500 '>
                    <div>
                        <Image src={img5} alt='loading' width={450} height={300} className='object-cover w-full'></Image>
                    </div>
                    <div className='px-4 flex justify-center items-center h-[70px]'>
                        <h1>Web 3 and Metaverse</h1>
                    </div>
                </div>
            </a>
            <a href="" className='hover:scale-105 duration-200 transition-all'>
                <div className='overflow-hidden h-fit box-shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold border border-gray-500 '>
                    <div>
                        <Image src={img6} alt='loading' width={450} height={300} className='object-cover w-full'></Image>
                    </div>
                    <div className='px-4 flex justify-center items-center h-[70px]'>
                        <h1>Cloud Native Computing</h1>
                    </div>
                </div>
            </a>
            <a href="" className='hover:scale-105 duration-200 transition-all'>
                <div className='overflow-hidden h-fit box-shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold border border-gray-500 '>
                    <div>
                        <Image src={img7} alt='loading' width={450} height={300} className='object-cover w-full'></Image>
                    </div>
                    <div className='px-4 flex justify-center items-center h-[70px]'>
                        <h1>Ambient Computing and IoT</h1>
                    </div>
                </div>
            </a>
            <a href="" className='hover:scale-105 duration-200 transition-all'>
                <div className='overflow-hidden h-fit box-shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold border border-gray-500 '>
                    <div>
                        <Image src={img8} alt='loading' width={450} height={300} className='object-cover w-full'></Image>
                    </div>
                    <div className='px-4 flex justify-center items-center h-[70px]'>
                        <h1>Geonomics and Bioinformatics</h1>
                    </div>
                </div>
            </a>
            <a href="" className='hover:scale-105 duration-200 transition-all'>
                <div className='overflow-hidden h-fit box-shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold border border-gray-500 '>
                    <div>
                        <Image src={img9} alt='loading' width={450} height={300} className='object-cover w-full'></Image>
                    </div>
                    <div className='px-4 flex justify-center items-center h-[70px]'>
                        <h1>Network Programmability and Automation</h1>
                    </div>
                </div>
            </a>
        </div>
    </div>
    </>
  )
}

export default Section03