import React, { useEffect, useState } from 'react';
import { Profil } from '../../../types/types';
import Input from '../../../partials/Input';
import { useForm } from 'react-hook-form';
interface ProfilCom {
    handleChange: (data: Profil) => void;
}
interface FormValues {
    username: string,
    networks: string,
    website: string,
    Icon: string
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

    const form = useForm<FormValues>()
    const { register, formState: { errors } } = form;

    const onSubmit = (e) => {

        e.preventDefault();

        handleChange(profilData)
    };
    return (
        <div className='space-y-3'>

            <form onSubmit={onSubmit}>
                <h2 className='text-xl'>Add New Profile </h2>
                <div className="mt-4 rounded-md flex space-x-4 ">
                    <Input
                        content={'networks'}
                        type={'text'}
                        onChange={(e) => handleInputChange(e)}
                        placeholder={'LinkedIn'}
                        label={'networks'}
                        value={profilData.networks || ''}
                        register={register("networks", { required: "networks is required" })}
                        error={errors.networks}
                        required={true}
                    />
                    <Input
                        content={'username'}
                        type={'text'}
                        onChange={(e) => handleInputChange(e)}
                        placeholder={'Amine.kammoun'}
                        label={'username'}
                        value={profilData.username || ''}
                        register={register("username", { required: "username is required" })}
                        error={errors.username}
                        required={true}
                    />

                </div>

                <Input
                    content={"website"}
                    type="string"
                    onChange={(e) => handleInputChange(e)}
                    placeholder='https://www.linkedin.com/certification'
                    label={'website'}
                    value={profilData.website || ''}
                    register={register("website", { required: "website is required" })}
                    error={errors.website}
                    required={true}
                />
                <Input
                    content={'Icon'}
                    type={'string'}
                    onChange={(e) => handleInputChange(e)}
                    placeholder={'Icon'}
                    label={'Icon'}
                    value={profilData.Icon}
                    register={register("Icon", { required: "Icon is required" })}
                    error={errors.Icon}
                    required={true}
                />


                <button type="submit" className="bg-white w-full text-black mt-4 py-2 px-4 rounded-md ">Submit</button>

            </form>
            {/* <button onClick={() => handleChange(profilData)} className="bg-white w-full text-black py-2 px-4 rounded-md ">
                Create
            </button> */}

        </div>
    );
};

export default ProfilForm;
