import React from 'react';

export default function Button({ className, value, title, type }) {
  return (
    <>
      <button className={className} value={value} type={type}>
        {title}
      </button>
    </>
  );
}
