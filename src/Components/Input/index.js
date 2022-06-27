import React from 'react'

export default function Input ({type, value, placeholder, onChange, name}) {
    return(
        <>
            <input type= {type}
            Value={value}
            placeholder={placeholder}
            onChange={onChange}
            name={name}/>
        </>
    )
}