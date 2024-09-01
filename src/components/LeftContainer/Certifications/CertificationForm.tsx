import React, { useEffect, useState } from 'react';
import { Certification } from '../../../types/types';
import Input from '../../../partials/Input';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
interface CertificationCom {
    handleChange: (data: Certification) => void;
}
interface FormValues {
    name: string,
    issuer: string,
    website: string,
    rangeDate: string,
    summary: string,
}

const CertificationForm: React.FC<CertificationCom> = ({ handleChange }) => {
    const formRef = React.useRef<HTMLFormElement>(null);
    const [certificationData, setCertificationData] = useState<Certification>(
        {
            name: '',
            issuer: '',
            website: '',
            rangeDate: '',
            summary: '',
        }
    );

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

        const { name, value } = e.target;
        if (value != '') {
            console.log(name, value);
            setCertificationData((prevData) => ({
                ...prevData,

                [name]: value,

            }))
        }

    };
    useEffect(() => {
        console.log('Updated Certification:', certificationData);
    }, [certificationData])

    const form = useForm<FormValues>()
    const { register, control, formState: { errors } } = form;

    const onSubmit = (e) => {

        e.preventDefault();

        handleChange(certificationData)
    };

    return (
        <div className='space-y-3'>

            <form className=" rounded-md" ref={formRef} onSubmit={onSubmit}>
                <h2>Add New Certification</h2>
                <div className="mt-4 rounded-md flex space-x-4 ">
                    <Input
                        content={'name'}
                        type={'text'}
                        onChange={(e) => handleInputChange(e)}
                        placeholder={'name'}
                        label={'name'}
                        required={true}
                        value={certificationData.name || ''}
                        error={errors.name}
                        register={register("name", { required: "name is required" })}  // Pass register function

                    />
                    <Input
                        content={'issuer'}
                        type={'text'}
                        onChange={(e) => handleInputChange(e)}
                        placeholder={'https://www.linkedin.com/certification'}
                        label={'issuer'}
                        value={certificationData.issuer || ''}
                        register={register("issuer", { required: "issuer is required" })}  // Pass register function
                        error={errors.issuer}
                        required={true}
                    />

                </div>
                <div className="mb-4 rounded-md flex space-x-4 justify-between">
                    <Input
                        content={"Date"}
                        type="string"
                        onChange={(e) => handleInputChange(e)}
                        placeholder='Juanuary 2016'
                        label={'Date'}
                        value={certificationData.rangeDate || ''}
                        register={register("rangeDate", { required: "date is required" })}
                        error={errors.rangeDate}
                        required={true}
                    />
                    <Input
                        content={'website'}
                        type={'string'}
                        onChange={(e) => handleInputChange(e)}
                        placeholder={'website'}
                        label={'website'}
                        value={certificationData.website}
                        register={register("website", { required: "website is required" })}
                        error={errors.website}
                        required={true}
                    />

                </div>
                <textarea id="summary" onChange={(e) => handleInputChange(e)} name='summary' value={certificationData.summary} rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your Summary..."></textarea>
                <button type="submit" className="bg-white w-full text-black mt-4 py-2 px-4 rounded-md ">Submit</button>

            </form>
            {/* <button onClick={() => cetficationHandleChange(certificationData)} className="bg-white w-full text-black py-2 px-4 rounded-md ">
                Create
            </button> */}
            <DevTool control={control} />
        </div>
    );
};

export default CertificationForm;
