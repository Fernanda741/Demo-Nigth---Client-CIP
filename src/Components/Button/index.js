import React from "react";

export default function Button({ onClick, value, title }) {
  return (
    <>
      <button onClick={onClick} value={value}>
        {title}
      </button>
    </>
  );
}
