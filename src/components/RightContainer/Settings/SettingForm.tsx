import { useState } from 'react'

const SettingForm = () => {
    // State variables for form inputs
    const [padding, setPadding] = useState(10);
    const [margin, setMargin] = useState(10);
    const [textColor, setTextColor] = useState('10');

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can use the state variables to apply the settings to your webpage
        console.log('Padding:', padding);
        console.log('Margin:', margin);
        console.log('Text Color:', textColor);
    };

    return (
        <div className="container mx-auto p-4">
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="padding" className="block">Padding:</label>
                    <input type="range" id="padding" value={padding || 0} onChange={(e) => setPadding(+e.target.value)} min="0" max="100"         className="w-full appearance-none bg-transparent [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-black/25 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-[25px] [&::-webkit-slider-thumb]:w-[25px] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white" 
 />
                    <span>{padding}</span>
                </div>
                <div>
                    <label htmlFor="margin" className="block">Margin:</label>
                    <input type="range" id="margin" value={margin|| 0} onChange={(e) => setMargin(+e.target.value)} min="0" max="100" className="w-full appearance-none bg-transparent [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-black/25 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-[25px] [&::-webkit-slider-thumb]:w-[25px] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white" />
                    <span>{margin}</span>
                </div>
                <div>
                    <label htmlFor="textColor" className="block">Text Color:</label>
                    <input type="text" id="textColor" value={textColor|| ''} onChange={(e) => setTextColor(e.target.value)} className="border border-gray-300 p-2 rounded-md w-full" />
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">Apply Settings</button>
            </form>
        </div>
    );
}

export default SettingForm;
