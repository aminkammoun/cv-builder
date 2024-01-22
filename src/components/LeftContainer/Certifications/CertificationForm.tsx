import React, { useEffect, useState } from 'react';
import { Certification } from '../../../types/types';
import Input from '../../../partials/Input';
interface CertificationCom {
    handleChange: (data: Certification) => void;
}

const CertificationForm: React.FC<CertificationCom> = ({ handleChange }) => {
    const [certificationData, setCertificationData] = useState<Certification>(
        {
            name:'',
            issuer:'',
            website:'',
            Date: '',
            summary: '',
        }
    );

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

        const { name, value } = e.target;
        console.log(name, value);
        setCertificationData((prevData) => ({
            ...prevData,

            [name]: value,

        }))
    };
    useEffect(() => {
        console.log('Updated EducationData:', certificationData);
    }, [certificationData])



    return (
        <div className='space-y-3'>

            <form className=" rounded-md">
                <h2>Add New Certification</h2>
                <div className="mt-4 rounded-md flex space-x-4 ">
                    <Input
                        content={'name'}
                        type={'text'}
                        onChange={(e) => handleInputChange(e)}
                        placeholder={'name'}
                        label={'name'}
                        value={certificationData.name || ''}
                    />
                    <Input
                        content={'issuer'}
                        type={'text'}
                        onChange={(e) => handleInputChange(e)}
                        placeholder={'https://www.linkedin.com/certification'}
                        label={'issuer'}
                        value={certificationData.issuer || ''}
                    />

                </div>
                <div className="mb-4 rounded-md flex space-x-4 justify-between">
                    <Input
                        content={"Date"}
                        type="string"
                        onChange={(e) => handleInputChange(e)}
                        placeholder='Juanuary 2016'
                        label={'Date'}
                        value={certificationData.Date || ''}
                    />
                    <Input
                        content={'website'}
                        type={'string'}
                        onChange={(e) => handleInputChange(e)}
                        placeholder={'website'}
                        label={'website'}
                        value={certificationData.website }
                    />

                </div>
                <textarea id="summary" onChange={(e) => handleInputChange(e)} name='summary' value={certificationData.summary} rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your Summary..."></textarea>
            </form>
            <button onClick={() => handleChange(certificationData)} className="bg-white w-full text-black py-2 px-4 rounded-md ">
                Create
            </button>

        </div>
    );
};

export default CertificationForm;
