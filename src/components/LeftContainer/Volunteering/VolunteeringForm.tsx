import React, { useEffect, useState } from 'react';
import { Volunteering } from '../../../types/types';
import Input from '../../../partials/Input';
interface VolunteeringCom {
    handleChange: (data: Volunteering) => void;
}

const VolunteeringForm: React.FC<VolunteeringCom> = ({ handleChange }) => {
    const [volunteeringData, setVolunteeringData] = useState<Volunteering>(
        {
            Organization: '',
            Position: '',
            date: '',
            Location: '',
            summary: '',
        }
    );

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

        const { name, value } = e.target;
        console.log(name, value);
        setVolunteeringData((prevData) => ({
            ...prevData,

            [name]: value,

        }))
    };
    useEffect(() => {
        console.log('Updated ProfilData:', volunteeringData);
    }, [volunteeringData])

    return (
        <div className='space-y-3'>

            <form className=" rounded-md">
                <h2 className='text-xl'>Add New Profile </h2>
                <div className="mt-4 rounded-md flex space-x-4 ">
                    <Input
                        content={'Organization'}
                        type={'text'}
                        onChange={(e) => handleInputChange(e)}
                        placeholder={'Organization'}
                        label={'Organization'}
                        value={volunteeringData.Organization || ''}
                    />
                    <Input
                        content={'Position'}
                        type={'text'}
                        onChange={(e) => handleInputChange(e)}
                        placeholder={'Position'}
                        label={'Position'}
                        value={volunteeringData.Position || ''}
                    />

                </div>
                <div className="flex justify-between">
                    <Input
                        content={"date"}
                        type="text"
                        onChange={(e) => handleInputChange(e)}
                        placeholder='range of date '
                        label={'date'}
                        value={volunteeringData.date || ''}
                    />
                    <Input
                        content={'Location'}
                        type={'text'}
                        onChange={(e) => handleInputChange(e)}
                        placeholder={'Location'}
                        label={'Location'}
                        value={volunteeringData.Location}
                    />
                </div>

                <textarea id="summary" onChange={(e) => handleInputChange(e)} name='summary' value={volunteeringData.summary} rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your Summary..."></textarea>



            </form>
            <button onClick={() => handleChange(volunteeringData)} className="bg-white w-full text-black py-2 px-4 rounded-md ">
                Create
            </button>

        </div>
    );
};

export default VolunteeringForm;
