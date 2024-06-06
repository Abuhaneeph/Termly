import React from 'react';

const ConventionalGroup = ({ checked, onChange }) => {
  return (
    <div>

      <label>
        <input
          type="checkbox"
          
          onChange={onChange}
        />
        Conventional Group
      </label>
      {/* Add your Conventional Group input fields or content here */}
    </div>
  );
};

export default ConventionalGroup;
