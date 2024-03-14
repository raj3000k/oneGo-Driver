// Card.tsx

import React from 'react';

interface CardProps {
    title: string;
    content: string;
}

const CardOne: React.FC<CardProps> = ({ title, content }) => {
    return (
        <div className="bg-white shadow-md rounded-md p-4">
            <div className="font-bold mb-2">{title}</div>
            <div>{content}</div>
        </div>
    );
};

export default CardOne;
