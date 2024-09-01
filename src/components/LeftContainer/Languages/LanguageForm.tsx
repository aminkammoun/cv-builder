import React, { useEffect, useState } from 'react';
import { Language } from '../../../types/types';
import Input from '../../../partials/Input';
import { useForm } from 'react-hook-form';
interface LanguageCom {
    handleChange: (data: Language) => void;
}
interface FormValues {
    name: string,
    level: string,
}

const LanguageForm: React.FC<LanguageCom> = ({ handleChange }) => {
    const [languageData, setLanguageData] = useState<Language>(
        {
            name: '',
            level: '',

        }
    );

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

        const { name, value } = e.target;
        console.log(name, value);
        setLanguageData((prevData) => ({
            ...prevData,

            [name]: value,

        }))
    };
    useEffect(() => {
        console.log('Updated ProfilData:', languageData);
    }, [languageData])
    const form = useForm<FormValues>()
    const { register, formState: { errors } } = form;

    const onSubmit = (e) => {

        e.preventDefault();

        handleChange(languageData)
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
                        placeholder={'English'}
                        label={'name'}
                        value={languageData.name || ''}
                        required={true}
                        error={errors.name}
                        register={register("name", { required: "name is required" })}  // Pass register function

                    />
                    <Input
                        content={'level'}
                        type={'text'}
                        onChange={(e) => handleInputChange(e)}
                        placeholder={'C2'}
                        label={'level'}
                        value={languageData.level || ''}
                        required={true}
                        error={errors.level}
                        register={register("level", { required: "level is required" })}  // Pass register function

                    />

                </div>




            </form>
            <button onClick={() => handleChange(languageData)} className="bg-white w-full text-black py-2 px-4 rounded-md ">
                Create
            </button>

        </div>
    );
};

export default LanguageForm;
