import React, { useEffect, useState } from 'react';
import { Education } from '../../../types/types';
import Input from '../../../partials/Input';
import { useForm } from 'react-hook-form';
import { DevTool } from "@hookform/devtools";

interface EducationCom {
handleChange: (data: Education) => void;
}
interface FormValues {
institution: string,
degree: string,
rangeDate: string,
location: string,
summary: string,
}

const EducationForm: React.FC<EducationCom> = ({ handleChange }) => {

const [educationData, setEducationData] = useState<Education>(
    {
        institution: '',
        degree: '',
        rangeDate: '',
        location: '',
        summary: '',
    }
);

const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    console.log('onchange: ')
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
const form = useForm<FormValues>()
const { register, control, formState: { errors } } = form;

const onSubmit = (e) => {

    e.preventDefault();

    handleChange(educationData)
};

return (
    <div className='space-y-3'>

        <>
            <h2>Add New Education</h2>

            <form onSubmit={onSubmit}>

                <div className="mt-4 rounded-md flex space-x-4 ">

                    <Input
                        content={'institution'}
                        value={educationData.institution || ''}
                        type={'text'}
                        onChange={(e) => handleInputChange(e)}
                        placeholder={'institution'}
                        label={'institution'}
                        required={true}
                        error={errors.institution}
                        register={register("institution", { required: "institution is required" })}  // Pass register function

                    />
                    <Input
                        value={educationData.degree || ''}
                        content={'degree'}
                        type={'text'}
                        onChange={(e) => handleInputChange(e)}
                        placeholder={'degree'}
                        label={'degree'}
                        register={register("degree", { required: "degree is required" })}  // Pass register function
                        error={errors.degree}
                        required={true}
                    />

                </div>
                <div className="mb-4 rounded-md flex justify-between">
                    <Input

                        content={"rangeDate"}
                        type={'text'}
                        value={educationData.rangeDate || ''}
                        onChange={(e) => handleInputChange(e)}
                        placeholder='March 2014 - March 2024'
                        label={'Range date'}
                        register={register("rangeDate", { required: "Range date is required" })}
                        error={errors.rangeDate}
                        required={true}
                    />
                    <Input
                        value={educationData.location || ''}
                        content={'location'}
                        type={'text'}
                        onChange={(e) => handleInputChange(e)}
                        placeholder={'location'}
                        label={'location'}
                        register={register("location", { required: "location is required" })}
                        error={errors.location}
                        required={true}
                    />

                </div>

                <textarea id="summary" onChange={(e) => handleInputChange(e)} name='summary' value={educationData.summary} rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your Summary..."></textarea>
                <button type="submit" className="bg-white w-full text-black mt-4 py-2 px-4 rounded-md ">Submit</button>
            </form>
            {/* <button onClick={() => handleChange(educationData)} className="bg-white w-full text-black mt-4 py-2 px-4 rounded-md ">Submit</button> */}
            <DevTool control={control} />
        </>


    </div>
);
};

export default EducationForm;
