import React from "react";

export default function Button({ onClick, value, title, type }) {
  return (
    <>
      <button onClick={onClick} value={value} type={type}>
        {title}
      </button>
    </>
  );
}
