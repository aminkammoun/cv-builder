import React, { useEffect, useState } from 'react';
import { Profil } from '../../../types/types';
import Input from '../../../partials/Input';
interface ProfilCom {
    handleChange: (data: Profil) => void;
}

const ProfilForm: React.FC<ProfilCom> = ({ handleChange }) => {
    const [profilData, setProfilData] = useState<Profil>(
        {
            username: '',
            networks: '',
            website: '',
            Icon: ''
        }
    );

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

        const { name, value } = e.target;
        console.log(name, value);
        setProfilData((prevData) => ({
            ...prevData,

            [name]: value,

        }))
    };
    useEffect(() => {
        console.log('Updated ProfilData:', profilData);
    }, [profilData])

    return (
        <div className='space-y-3'>

            <form className=" rounded-md">
                <h2 className='text-xl'>Add New Profile </h2>
                <div className="mt-4 rounded-md flex space-x-4 ">
                    <Input
                        content={'networks'}
                        type={'text'}
                        onChange={(e) => handleInputChange(e)}
                        placeholder={'LinkedIn'}
                        label={'networks'}
                        value={profilData.networks || ''}
                    />
                    <Input
                        content={'username'}
                        type={'text'}
                        onChange={(e) => handleInputChange(e)}
                        placeholder={'Amine.kammoun'}
                        label={'username'}
                        value={profilData.username || ''}
                    />

                </div>
                
                    <Input
                        content={"website"}
                        type="string"
                        onChange={(e) => handleInputChange(e)}
                        placeholder='https://www.linkedin.com/certification'
                        label={'website'}
                        value={profilData.website || ''}
                    />
                    <Input
                        content={'Icon'}
                        type={'string'}
                        onChange={(e) => handleInputChange(e)}
                        placeholder={'Icon'}
                        label={'Icon'}
                        value={profilData.Icon}
                    />

               

            </form>
            <button onClick={() => handleChange(profilData)} className="bg-white w-full text-black py-2 px-4 rounded-md ">
                Create
            </button>

        </div>
    );
};

export default ProfilForm;
