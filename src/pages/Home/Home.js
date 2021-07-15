import React from 'react'
import Navbar from '../../components/Navbar'
import HeroSection from '../../components/HeroSection'
import {homeObjOne} from './Data'
import Footer from '../../components/Footer'

function Home() {
    return (
        <>
            <Navbar />
            <HeroSection {...homeObjOne} />
            <Footer />
        </>
    )
}

export default Home
