import React from 'react';
import { AvatarProps } from '../types/types';


const getInitials = (givenName?: string, familyName?: string) => {
    const initials = `${givenName?.charAt(0) || ''}${familyName?.charAt(0) || ''}`;
    return initials.toUpperCase();
};

const Avatar: React.FC<AvatarProps> = ({ givenName, familyName, size = 'w-12 h-12' }) => {
    return (
        <div className={`inline-block ${size} rounded-full bg-gray-200 text-gray-600 flex items-center justify-center`}>

            <span className="font-medium text-lg">
                {getInitials(givenName, familyName,)}
            </span>

        </div>
    );
};

export default Avatar;