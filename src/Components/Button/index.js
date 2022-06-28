import React from "react";

export default function Button({ value, title, type }) {
  return (
    <>
      <button value={value} type={type}>
        {title}
      </button>
    </>
  );
}
