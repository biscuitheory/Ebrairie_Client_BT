import React from 'react';

const InputGroup = ({ type, name, title, value }) => {
  const handleChange = (event) => {
    value(event.target.value, name);
  };
  return (
    <>
      <label htmlFor={name}>{title}</label>
      <input type={type} name={name} id={name} onChange={handleChange} />
    </>
  );
};

export default InputGroup;
