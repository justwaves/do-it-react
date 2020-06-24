import React from 'react';
// import React, { useEffect, useRef } from "react";
import PropTypes from 'prop-types';

const Input = ({
  errorMessage,
  label,
  name,
  value,
  type,
  // onFocus,
  onChange,
  // autoFocus,
}) => {
  // const inputEl = useRef(null);

  const handleChange = (e) => {
    if (onChange) {
      onChange(name, e.target.value);
    }
  };

  // useEffect(() => {
  //   if (autoFocus) {
  //     inputEl.current.focus();
  //   }
  // }, [autoFocus]);

  return (
    <label>
      {label}
      <input
        id={`input_${name}`}
        // ref={inputEl}
        onChange={handleChange}
        // onFocus={onFocus}
        value={value}
        type={type}
      />
      {errorMessage && <span className="error">{errorMessage}</span>}
    </label>
  );
};

Input.defaultProps = {
  type: 'text',
  // onFocus: false,
  onChange: () => {},
  autoFocus: () => {},
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Input;
