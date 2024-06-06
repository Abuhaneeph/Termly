import React from 'react';

const MLMGroup = ({ checked, onChange }) => {
  return (
    <div>
      
      <label>
        <input
          type="checkbox"
          
          onChange={onChange}
        />
     MLM Group
      </label>
      {/* Add your MLM Group input fields or content here */}
    </div>
  );
};

export default MLMGroup;
