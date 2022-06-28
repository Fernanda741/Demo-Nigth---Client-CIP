import React from 'react'

export default function Button ({onClick, value, title, children, className}) {
    return(
        <>
            <button 
            onClick={onClick}
            className={className} 
            value={value} 
            title={title} >
              {children}
            </button>
        </>
    )
}