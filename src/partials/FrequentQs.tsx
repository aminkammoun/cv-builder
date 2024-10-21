
import Accordion from './Accordion';

function FrequentQs() {
    const faqItems = [
        {
            question: 'What is a CV generator?',
            answer: 'A CV generator is an online tool that helps you create a professional, printable resume in minutes by asking you simple questions and using your answers to create the content for your resume.',
        },
        {
            question: 'How do I use a CV generator?',
            answer: 'To use a CV generator, simply answer the questions provided and fill out each section of your resume with relevant information about yourself and experiences. Once complete, you can download and print your finished document.',
        },
        {
            question: 'What type of information should I include?',
            answer: 'When creating your resume it’s important to be honest and provide accurate details regarding past work experience and educational background as well as other skills related activities such as volunteering or certifications earned over time etc., This ensures employers get an accurate representation of what makes you qualified for the position.',
        },
        {
            question: 'Can I save multiple versions of my Cv?',
            answer: 'Yes this is possible, users can save various drafts and quickly switch between them when needed.',
        },
        {
            question: 'Is there an ideal length for resumes/CVs ?',
            answer: 'Generally speaking two pages should suffice although depending upon experience level some profiles may exceed this limit slightly (3-4 pages maximum).',
        },
        {
            question: 'Should I include references on my Cv?',
            answer: 'Generally speaking no - employers usually ask separately if they wish to follow up with referees . This avoids having outdated contact details visible on your profile',
        },
    ];
    return (
        <section className="relative">

            {/* Section background (needs .relative class on parent and next sibling elements) */}
            <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>
            <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pt-12 md:pt-20">

                    {/* Section header */}

                    {/* Section content */}
                    <div className="md:grid md:grid-cols-12 md:gap-6">

                        {/* Content */}
                        <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6 flex justify-center items-center" data-aos="fade-right">
                            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                                <h1 className="h2 mb-4">Frequently Asked Questions</h1>
                                <p className="text-xl text-gray-600">Don't know where to start? Our FAQ section is the perfect place to begin your journey.</p>
                            </div>

                        </div>

                        {/* Tabs items */}
                        <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="zoom-y-out" >
                            <Accordion items={faqItems} />
                        </div >

                    </div >

                </div >
            </div >
        </section >
    )
}

export default FrequentQs