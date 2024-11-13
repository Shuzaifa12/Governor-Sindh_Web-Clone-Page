import React from 'react';
import Header from './components/header';
import Herosection from './components/herosection';
import Section02 from './components/section02';
import Section03 from './components/section03';
import Footer from './components/footer';

const page = () => {
  return (
    <>
    <Header />
    <Herosection />
    <Section02 />
    <Section03 />
    <Footer />
    </>
  )
}

export default page