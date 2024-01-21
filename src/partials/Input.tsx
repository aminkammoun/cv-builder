import React, { ChangeEvent } from 'react'
interface GlobalInputProps {
    label: string;
    value: string | number;
    placeholder: string;
    type: string;
    content: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void; 
 }
const Input:React.FC<GlobalInputProps> = ({ type, placeholder, content, label, value, onChange }) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        // Extract the value from the event
        
    
        // Call the provided onChange function with the new value
        onChange(e);
      };
    return (
        <div className="mb-4">
            <label className="block text-sm font-bold ">{label}</label>
            <input
                type={type}
                placeholder={placeholder}
                id={content}
                name={content}
                value={value}
                autoComplete="given-name"
                onChange={handleChange}
                
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-black-500 text-slate-900"
            />
        </div>
    );
};

export default Input