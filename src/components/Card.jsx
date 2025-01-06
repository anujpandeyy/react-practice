import React from 'react';
import MyImage from '../assets/anujpandey.jpg';

function Card(){
    return (
        <div className="card">
            <img src={MyImage} alt="card-profile" className='card-img'/>
            <h2 className='card-h2'>Anuj Pandey</h2>
            <p className='card-p'>I like to Code and play Chess</p>
        </div>
    );
}

export default Card;