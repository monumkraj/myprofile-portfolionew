// Marque.js
import React from 'react';

function Marque({ imageUrl }) {
    return (
        <div className="img-swip text-center whitespace-nowrap overflow-hidden mt-12">
        <img 
            src={imageUrl} 
            alt="Technology Icon" 
            className="img w-[9vw] mx-auto flex-shrink-0" 
        />
    </div>
    );
}

export default Marque;
