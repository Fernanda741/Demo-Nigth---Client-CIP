import React from 'react';
import './style.css'

export default function PlusButton ({onClick}) {
    return (
        <>
        <button 
        onClick={onClick} className="plus-button">+</button>
        </>
    )
}