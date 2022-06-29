import React from "react";

export default function Button({ onClick, value, title, type, children }) {
  return (
    <>
      <button onClick={onClick} value={value} type={type} >
        {title} {children}
      </button>
    </>
  );
}
