
import React, { ChangeEvent, useRef, } from 'react'
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
interface GlobalInputProps {
    label: string;
    value?: string | number;
    placeholder: string;
    type: string;
    content: string;
    required?: boolean | false;
    className?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    register?: UseFormRegisterReturn<any>;
    error?: FieldError;

}

const Input: React.FC<GlobalInputProps> = ({ type, placeholder, content, label,value, required, register, error, onChange }) => {
    const ref = useRef(null);
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        register?.onChange(e);
        // Extract the value from the event
        // Call the provided onChange function with the new value
        if (onChange) {
            onChange(e);
        }
    };
    return (
        <div className="mb-4">
            <label className="block text-sm font-bold ">{label}</label>
            <input
                type={type}
                value={value}
                placeholder={placeholder}
                id={content}
                name={content}
                {...register}  // Spread register props directly
                ref={ref}
                autoComplete="given-name"
                onChange={handleChange}
                required={required}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-black-500 text-white   bg-bg-300"

            />
            {error && <p style={{ color: 'red' }}>{error.message}</p>}  {/* Display error message */}

        </div>
    );
};



export default Input