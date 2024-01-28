import { LinkIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { Link } from 'react-router-dom';

const ProfilCard = ({ data }) => {
    const renderItems = () => {
        return data.map((item, index) => (
            <div key={index} className="mb-4 p-2 bg-black border border-dashed rounded-md shadow-md">
                <div className='flex justify-between'>
                    <span className="flex space-x-2">
                        <img height="32" width="32" src={`https://cdn.simpleicons.org/${item.Icon}`} />
                        <h2 className="text-lg  font-bold">{item.network}</h2>
                    </span>
                    <LinkIcon >
                        <Link to={`${item.website}`} />
                    </LinkIcon>

                </div>
            </div>
        ));
    };

    return (
        <div className="max-w-md mx-auto p-1">

            {renderItems()}
        </div>
    );
};

export default ProfilCard;
