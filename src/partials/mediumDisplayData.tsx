import React from 'react'


interface GlobalMediumProps {
    tR?: string;
    tL?: string;
    bR?: string;
    bL?: string;
    summary?: string;
    isPdf?: boolean;
}

const mediumDisplayData: React.FC<GlobalMediumProps> = ({ tR, tL, bR, bL, summary}) => {
 
    return (
        <div className="flex-1 resume-item  mt-2">
            <div className="flex justify-between">

                {
                    tR && <span className='ml-1 flex items-center space-x-4 font-bold'>{tR} </span>
                }

                {
                    tL && <span className='ml-1 flex items-center space-x-4'>{tL}</span>
                }


            </div>
            <div className="flex justify-between">
                <span>
                    {
                        bL && <span className='ml-1 flex items-center space-x-4'>{bL}</span>
                    }</span>
                <span>
                    {
                        bR && <span className='ml-1 flex items-center space-x-4'>{bR}</span>
                    }</span>
            </div>
            {
                summary && <p className="text-gray-600 break-words">{summary}</p>
            }
        </div>
    )
}

export default mediumDisplayData