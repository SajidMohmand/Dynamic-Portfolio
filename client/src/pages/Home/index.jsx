import React from 'react'
import { useSelector } from "react-redux"

import Header from '../../components/Header.jsx'
import Intro from './Intro.jsx'
import About from './About.jsx'
import Experiences from './Experiences.jsx'
import Projects from './Projects.jsx'
import Courses from './Courses.jsx'
import Contact from './Contact.jsx'
import Footer from './Footer.jsx'
import LeftSide from './LeftSide.jsx'
const index = () => {

    const { portfolioData } = useSelector(state => state.root);

    return (
        <div>
            <Header />

            {portfolioData && (
                <div className='bg-primary px-40  sm:px-5'>
                    <Intro />
                    <About />
                    <Experiences />
                    <Projects />
                    <Courses />
                    <Contact />
                    <Footer />
                    <LeftSide />
                </div>
            )}
        </div>
    )
}

export default index
