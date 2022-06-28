import React from "react";

export const Input = React.forwardRef(
  ({ onChange, label, register, required, onBlur, type, ...props }, ref) => {
    return (
      <>
        <label>{label}</label>
        <input
          register={register}
          onBlur={onBlur}
          required={required}
          onChange={onChange}
          ref={ref}
          type={type}
          {...props}
        />
      </>
    );
  }
);
