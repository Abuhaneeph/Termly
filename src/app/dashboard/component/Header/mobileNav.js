import React from 'react';

const MobileItem = ({ href, iconClass, text }) => {
  return (
    <li className="w3-bar-item w3-button w3-mobile">
      <a href={href}>
        <i className={`fa ${iconClass} fa-2x`} /> {text}
      </a>
    </li>
  );
};

export default MobileItem;
