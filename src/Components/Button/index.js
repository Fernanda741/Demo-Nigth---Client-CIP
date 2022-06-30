import React from 'react';
import './style.css';

export default function Button({
  onClick,
  value,
  title,
  type,
  children,
  buttonClass,
}) {
  return (
    <>
      <button
        className={'btn' + (buttonClass ? ' ' + buttonClass : '')}
        onClick={onClick}
        value={value}
        type={type}
      >
        {title} {children}
      </button>
    </>
  );
}
