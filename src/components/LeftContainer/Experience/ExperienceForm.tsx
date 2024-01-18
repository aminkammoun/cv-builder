import React, { useEffect, useState } from 'react';
import { Experience } from '../../../types/types';
interface ExperienceCom{
    handleChange: (data : Experience) => void;
  }
  
const ExperienceForm: React.FC<ExperienceCom> = ({handleChange}) => {
    const [experienceData, setExperienceData] = useState<Experience>(
        {
            company: '',
            position: '',
            startDate: '',
            endDate: ''
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
        <>
            <form className="max-w-md w-full m-auto rounded-md">

                <div className="mb-4 p-2 bg-white rounded-md flex space-x-4">
                    <label className="block mb-2">
                    Company:
                        <input
                            type="text"
                            name='company'
                            value={experienceData.company}
                            onChange={(e) => handleInputChange(e)}
                            className="form-input mt-1 block w-full text-black"
                        />
                    </label>
                    <label className="block mb-2">
                        Degree:
                        <input
                            type="text"
                            name='position'
                            value={experienceData.position}
                            onChange={(e) => handleInputChange(e)}
                            className="form-input mt-1 block w-full"
                        />
                    </label>
                    <label className="block mb-2">
                        Start Date:
                        <input
                            type="text"
                            value={experienceData.startDate}
                            name='startDate'
                            onChange={(e) => handleInputChange(e)}
                            className="form-input mt-1 block w-full"
                        />
                        <input
                            type="text"
                            value={experienceData.endDate}
                            name='endDate'
                            onChange={(e) => handleInputChange(e)}
                            className="form-input mt-1 block w-full"
                        />
                    </label>

                </div>


            </form>
            <div className='flex justify-end '>

                <button onClick={() => handleChange(experienceData)} className="bg-blue-500 text-white py-2 px-4 rounded-md ">
                    Create
                </button>
            </div>
        </>
    );
};

export default ExperienceForm;
