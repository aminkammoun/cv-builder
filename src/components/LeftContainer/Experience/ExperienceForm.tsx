import React, { useEffect, useState } from 'react';
import { Experience } from '../../../types/types';
import Input from '../../../partials/Input';
interface ExperienceCom {
    handleChange: (data: Experience) => void;
}

const ExperienceForm: React.FC<ExperienceCom> = ({ handleChange }) => {
    const [experienceData, setExperienceData] = useState<Experience>(
        {
            company: '',
            position: '',
            location: '',
            startDate: '',
            endDate: '',
            summary: '',
        }
    );

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

        const { name, value } = e.target;
        console.log(name, value);
        setExperienceData((prevData) => ({
            ...prevData,

            [name]: value,

        }))
    };
    useEffect(() => {
        console.log('Updated ExperienceData:', experienceData);
    }, [experienceData])



    return (
        <div className='space-y-3'>
            <form className=" rounded-md">
                <h2>Add New Experience</h2>
                <div className="mt-4 rounded-md flex space-x-4 ">
                    <Input
                        content={'company'}
                        type={'text'}
                        onChange={(e) => handleInputChange(e)}
                        placeholder={'company'}
                        label={'company'}
                        value={experienceData.company || ''}
                    />
                    <Input
                        content={'position'}
                        type={'text'}
                        onChange={(e) => handleInputChange(e)}
                        placeholder={'position'}
                        label={'position'}
                        value={experienceData.position || ''}
                    />

                </div>


                <div className="mb-4 rounded-md flex space-x-4  justify-between">
                    <Input
                        content={"Start year"}
                        type="date"
                        onChange={(e) => handleInputChange(e)}
                        placeholder='Start year'
                        label={'Start year'}
                        value={experienceData.startDate || ''}
                    />
                    <Input
                        content={'End year'}
                        type={'date'}
                        onChange={(e) => handleInputChange(e)}
                        placeholder={'End year'}
                        label={'End year'}
                        value={experienceData.endDate}
                    />

                </div>


                <textarea id="summary" name='summary' onChange={(e) => handleInputChange(e)} value={experienceData.summary} rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your Summary..."></textarea>


            </form>
            <button onClick={() => handleChange(experienceData)} className="bg-white w-full text-black py-2 px-4 rounded-md ">
                Create
            </button>
        </div>
    );
};

export default ExperienceForm;
