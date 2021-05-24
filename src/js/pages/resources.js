import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import InputGroup from '../components/inputgroup';

const Resources = () => {
  const resources = useSelector((state) => state.resources.references);

  const [allResources, setAllResources] = useState([]);

  const handleChange = (event) => {
    const value = event.target.value;
    if (value) {
      const filteredResources = resources.filter((resource) =>
        resource.title.includes(value)
      );
      setAllResources(filteredResources);
    } else {
      setAllResources(resources);
    }
  };
  return (
    <>
      <h1>All the Resources</h1>
      <div>
        <label>Search resources</label>
        <input type="text" onChange={handleChange} />
        {/* <InputGroup
          type="text"
          name="Search resources :"
          value={handleChange}
        /> */}
      </div>
      {allResources.map((resource) => {
        return (
          <>
            <h2>{resource.title}</h2>
            <p>{resource.description}</p>
            <p>{resource.category}</p>
          </>
        );
      })}
    </>
  );
};

export default Resources;
