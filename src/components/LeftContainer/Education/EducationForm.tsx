import React, { useEffect, useState } from 'react';
import { Education } from '../../../types/types';
import Input from '../../../partials/Input';
interface EducationCom {
    handleChange: (data: Education) => void;
}

const EducationForm: React.FC<EducationCom> = ({ handleChange }) => {
    const [educationData, setEducationData] = useState<Education>(
        {
            institution: '',
            degree: '',
            rangeDate:'',
            location: '',
            summary: '',
        }
    );

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

        const { name, value } = e.target;
        console.log(name, value);
        setEducationData((prevData) => ({
            ...prevData,

            [name]: value,

        }))
    };
    useEffect(() => {
        console.log('Updated EducationData:', educationData);
    }, [educationData])



    return (
        <div className='space-y-3'>

            <form className=" rounded-md">
                <h2>Add New Education</h2>
                <div className="mt-4 rounded-md flex space-x-4 ">
                    <Input
                        content={'institution'}
                        type={'text'}
                        onChange={(e) => handleInputChange(e)}
                        placeholder={'institution'}
                        label={'institution'}
                        value={educationData.institution || ''}
                    />
                    <Input
                        content={'degree'}
                        type={'text'}
                        onChange={(e) => handleInputChange(e)}
                        placeholder={'degree'}
                        label={'degree'}
                        value={educationData.degree || ''}
                    />

                </div>
                <div className="mb-4 rounded-md flex justify-between">
                    <Input
                        content={"rangeDate"}
                        type={'text'}
                        onChange={(e) => handleInputChange(e)}
                        placeholder='March 2014 - March 2024'
                        label={'Range date'}
                        value={educationData.rangeDate || ''}
                    />
                    <Input 
                    content={'location'}
                    type={'text'}
                    onChange={(e) => handleInputChange(e)}
                    placeholder={'location'}
                    label={'location'}
                    value={educationData.location || ''}
                    />

                </div>
                <textarea id="summary" onChange={(e) => handleInputChange(e)} name='summary' value={educationData.summary} rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your Summary..."></textarea>
            </form>
            <button onClick={() => handleChange(educationData)} className="bg-white w-full text-black py-2 px-4 rounded-md ">
                Create
            </button>

        </div>
    );
};

export default EducationForm;
