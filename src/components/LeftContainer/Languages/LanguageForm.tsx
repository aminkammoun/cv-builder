import React, { useEffect, useState } from 'react';
import { Language } from '../../../types/types';
import Input from '../../../partials/Input';
interface LanguageCom {
    handleChange: (data: Language) => void;
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

    return (
        <div className='space-y-3'>

            <form className=" rounded-md">
                <h2 className='text-xl'>Add New Profile </h2>
                <div className="mt-4 rounded-md flex space-x-4 ">
                    <Input
                        content={'name'}
                        type={'text'}
                        onChange={(e) => handleInputChange(e)}
                        placeholder={'English'}
                        label={'name'}
                        value={languageData.name || ''}
                    />
                    <Input
                        content={'level'}
                        type={'text'}
                        onChange={(e) => handleInputChange(e)}
                        placeholder={'C2'}
                        label={'level'}
                        value={languageData.level || ''}
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
