import React, { useEffect, useState } from 'react';
import { Education } from '../../../types/types';
interface EducationCom{
    handleChange: (data : Education) => void;
  }
  
const EducationForm: React.FC<EducationCom> = ({handleChange}) => {
    const [educationData, setEducationData] = useState<Education>(
        {
            institution: '',
            degree: '',
            graduationYear: 2023,
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
        <>
            <form className="max-w-md w-full m-auto rounded-md">

                <div className="mb-4 p-2 bg-white rounded-md flex space-x-4">
                    <label className="block mb-2">
                        Institution:
                        <input
                            type="text"
                            name='institution'
                            value={educationData.institution}
                            onChange={(e) => handleInputChange(e)}
                            className="form-input mt-1 block w-full"
                        />
                    </label>
                    <label className="block mb-2">
                        Degree:
                        <input
                            type="text"
                            name='degree'
                            value={educationData.degree}
                            onChange={(e) => handleInputChange(e)}
                            className="form-input mt-1 block w-full"
                        />
                    </label>
                    <label className="block mb-2">
                        Graduation Year:
                        <input
                            type="text"
                            value={educationData.graduationYear}
                            name='graduationYear'
                            onChange={(e) => handleInputChange(e)}
                            className="form-input mt-1 block w-full"
                        />
                    </label>

                </div>


            </form>
            <div className='flex justify-end '>

                <button onClick={() => handleChange(educationData)} className="bg-blue-500 text-white py-2 px-4 rounded-md ">
                    Create
                </button>
            </div>
        </>
    );
};

export default EducationForm;
