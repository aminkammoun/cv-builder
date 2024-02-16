import React from 'react'

interface GlobalMediumProps {
    title: string;
    date?: string;
    addon?: string;
    level?: string;
    summary?: string;

}

const mediumDisplayData: React.FC<GlobalMediumProps> = ({ title, date, addon, level, summary }) => {
    return (
        <div className="flex-1 resume-item  mt-2">
            <div className="flex justify-between">
                <div>
                    <span className='ml-1 flex items-center space-x-4 font-bold'>{title} </span>
                    <span className='ml-1 flex items-center space-x-4'>{addon} </span>


                </div>
                {
                    addon && <span className='ml-1 flex items-center space-x-4'>{date} </span>
                }
                {
                    level && <span className='ml-1 flex items-center space-x-4'>{level} </span>
                }
            </div>
            {
                summary && <span className='ml-1 flex items-center space-x-4'>{summary} </span>
            }
        </div>
    )
}

export default mediumDisplayData