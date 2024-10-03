import React from 'react'
import Education from '../../MiddleContainer/Education/Index'
import Experience from '../../MiddleContainer/Experience/Index'
import Projects from '../../MiddleContainer/projects/Index'
import Language from '../../MiddleContainer/Language/Index'
import Certification from '../../MiddleContainer/Certification'
import Volunteering from '../../MiddleContainer/Volunteering'
import Basic from '../../MiddleContainer/Basics/Index'
export default function index() {
    return (

        <div className="basicStyle bg-white">
            <Basic/>
            <Language />
            <Education />
            <Experience />
            <Projects />
            <Volunteering />
            <Certification />
        </div>

    )
}
