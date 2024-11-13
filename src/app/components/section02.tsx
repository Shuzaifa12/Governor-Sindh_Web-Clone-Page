import React from 'react';
import Image from 'next/image';
import img1 from '../sec2images/img1.jpg';
import img2 from '../sec2images/img2.jpg';
import img3 from '../sec2images/img3.jpg';
import img4 from '../sec2images/img4.jpg';
import img5 from '../sec2images/img5.jpg';
import img6 from '../sec2images/img6.jpg';
import img7 from '../sec2images/img7.jpg';
import img8 from '../sec2images/img8.jpg';
import img9 from '../sec2images/img9.jpg';
import img10 from '../sec2images/img10.jpg';
import img11 from '../sec2images/img11.jpg';

const Section02 = () => {
  return (
    <>
    <div className='w-[95%] xl:w-[1300px] lg:w-[90%] m-auto sm:mt-20 mt-10 pb-10'>
        <h1 className='text-center sm:text-[32px] text-xl sm:leading-[2.5rem] leading-[1.75rem] text-main font-extrabold m-auto md:w-[95%] text-[rgb(4,78,131)]'> Certified Cloud Applied Generative AI Engineer (GenEng) and Solopreneur Developing Billion-Dollar Valued Developers and Soloprenuers</h1>

        <p className='sm:mt-10 mt-7 xl:text-[1.25rem] sm:text-[1.2rem] text-[1rem] text-zinc-800 sm:tracking-wider tracking-normal text-justify'>The pace of technological change is accelerating, big players like Microsoft, Amazon, Google, and OpenAI are winning by providing infrastructure, large AI foundation models, frameworks, 3D Metaverse experiences, and massive distribution networks. Solopreneurs trained in this program will win by automating work typically outsourced to employees, by directly connecting to customers by eliminating the middleman, and by developing vertical metaverses, thus paving the way for the first billion-dollar valued solopreneur businesses. This program has the objective to train this new breed of billion-dollar solopreneurs. These solopreneurs will adopt the ultra-lean business model and work independently and will not need to hire employees or other team members.</p>
    </div>

    {/* <div className='xl:w-[1300px] lg:w-[90%] w-[95%] m-auto mt-10 mb-10'></div> */}
    <div className='w-[95%] xl:w-[1300px] lg:w-[90%] m-auto gap-5 sm:flex '>
        <div className='mt-10 sm:mt-0'>
        <Image src={img1} alt='loadingimage' width={1088} height={896} className='shadow-2xl shadow-black rounded-lg h-[300px]'></Image>
        </div>
        <div className='mt-10 sm:mt-0'>
        <Image src={img2} alt='loadingimage' width={1088} height={896} className='shadow-2xl shadow-black rounded-lg h-[300px]'></Image>
        </div>
        <div className='mt-10 sm:mt-0'>
        <Image src={img3} alt='loadingimage' width={1088} height={896} className='shadow-2xl shadow-black rounded-lg h-[300px]'></Image>
        </div>
    </div>

    <div className='w-[95%] xl:w-[1300px] lg:w-[90%] m-auto gap-5 my-10 '>
        <div className='block sm:flex justify-between'>
            <div>
            <Image src={img4} alt='loading' width={640} height={600} className='rounded-md mt-5 h-[400px]'></Image>
            </div>
            <div>
            <Image src={img5} alt='loading' width={640} height={600} className='rounded-md mt-5 h-[400px]'></Image>
            </div>
        </div>
    </div>
    </>
  )
}

export default Section02