
import Basics from '../../MiddleContainer/Basics/Index'
import Education from '../../MiddleContainer/Education/Index'
import Experience from '../../MiddleContainer/Experience/Index'
import Projects from '../../MiddleContainer/projects/Index'
import Language from '../../MiddleContainer/Language/Index'
import Certification from '../../MiddleContainer/Certification'
import Volunteering from '../../MiddleContainer/Volunteering'
export default function TemplateTwo() {
    return (

        <div className='basicStyle bg-white mx-auto'>
            <div className="flex w-full">
                <div className="basis-4/5 max-w-full bg-gray-200 p-4">
                    <Basics />
                    <Education />

                    <Projects />
                </div>
                <div className="basis-1/5 max-w-full bg-blue-200 p-4">
                    <Volunteering />
                    <Experience />
                    <Certification />
                    <Language />
                </div>
            </div>
        </div>
    )
}
