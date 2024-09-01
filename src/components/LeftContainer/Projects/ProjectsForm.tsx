import React, { useEffect, useState } from 'react';
import { Projects } from '../../../types/types';
import Input from '../../../partials/Input';
import { useForm } from 'react-hook-form';
interface ProjectsCom {
    handleChange: (data: Projects) => void;
}
interface FormValues {
    name: string,
    Description: string,
    rangeDate: string,
    location: string,
    summary: string,
}
const ProjectsForm: React.FC<ProjectsCom> = ({ handleChange }) => {
    const [projectsData, setProjectsData] = useState<Projects>(
        {
            name: '',
            Description: '',
            rangeDate: '',
            location: '',
            summary: '',
        }
    );

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

        const { name, value } = e.target;
        console.log(name, value);
        setProjectsData((prevData) => ({
            ...prevData,

            [name]: value,

        }))
    };
    useEffect(() => {
        console.log('Updated ProfilData:', projectsData);
    }, [projectsData])
    const form = useForm<FormValues>()
    const { register, formState: { errors } } = form;

    const onSubmit = (e) => {

        e.preventDefault();

        handleChange(projectsData)
    };
    return (
        <div className='space-y-3'>

            <form onSubmit={onSubmit}>
                <h2 className='text-xl'>Add New Profile </h2>
                <div className="mt-4 rounded-md flex space-x-4 ">
                    <Input
                        content={'name'}
                        type={'text'}
                        onChange={(e) => handleInputChange(e)}
                        placeholder={'name'}
                        label={'name'}
                        value={projectsData.name || ''}
                        required={true}
                        error={errors.name}
                        register={register("name", { required: "name is required" })}  // Pass register function

                    />
                    <Input
                        content={'Description'}
                        type={'text'}
                        onChange={(e) => handleInputChange(e)}
                        placeholder={'Description'}
                        label={'Description'}
                        value={projectsData.Description || ''}
                        required={true}
                        error={errors.Description}
                        register={register("Description", { required: "Description is required" })}  // Pass register function

                    />

                </div>
                <div className="flex justify-between">
                    <Input
                        content={"rangeDate"}
                        type="text"
                        onChange={(e) => handleInputChange(e)}
                        placeholder='fev 2015 - fev 2025'
                        label={'range date'}
                        value={projectsData.rangeDate || ''}
                        required={true}
                        error={errors.rangeDate}
                        register={register("rangeDate", { required: "range date is required" })}  // Pass register function

                    />
                    <Input
                        content={'location'}
                        type={'text'}
                        onChange={(e) => handleInputChange(e)}
                        placeholder={'location'}
                        label={'location'}
                        value={projectsData.location}
                        required={true}
                        error={errors.location}
                        register={register("location", { required: "location is required" })}  // Pass register function

                    />
                </div>

                <textarea id="summary" onChange={(e) => handleInputChange(e)} name='summary' value={projectsData.summary} rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your Summary..."></textarea>
                <button type="submit" className="bg-white w-full text-black mt-4 py-2 px-4 rounded-md ">Submit</button>



            </form>
            {/* <button onClick={() => handleChange(projectsData)} className="bg-white w-full text-black py-2 px-4 rounded-md ">
                Create
            </button> */}

        </div>
    );
};

export default ProjectsForm;
