import React from 'react';

const InputGroup = ({ type, name, value }) => {
  const handleChange = (event) => {
    value(event.target.value, name);
  };
  return (
    <>
      <label>{name}</label>
      <input type={type} onChange={handleChange} />
    </>
  );
};

export default InputGroup;
