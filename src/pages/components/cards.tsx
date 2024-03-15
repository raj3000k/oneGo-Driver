// Card.tsx

import React from 'react';

interface CardProps {
    title: string;
    
    fair:number;
    from:string;
    dropped:string;
}
// [#1656B7]
const CardOne: React.FC<CardProps> = ({ title ,fair,from,dropped}) => {
    return (
        <div className="  bg-[#1656B7] shadow-md rounded-md p-1
        ">  
            <div className="font-bold text-white ml-2 flex justify-between w-screen">
                {title}
                <div className='mr-11'>{fair}/- Rs</div>
            </div>
            <div className="font-thin text-gray-100 text-sm ml-2 mt-1 ">Picked from</div>
            <div className="font-bold text-gray-100 ml-1">{from}</div>
            
            <div className="font-thin text-gray-100 text-sm ml-2">Dropped at</div>
            <div className="font-bold text-white ml-2">{dropped}</div>
            
            
        </div>
    );
};

export default CardOne;
