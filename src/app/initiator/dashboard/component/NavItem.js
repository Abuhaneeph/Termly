import React from 'react';

const NavItem = ({ href, iconClass, text }) => {
  return (
    <li>
      <a href={href}>
        <i className={`fa ${iconClass} fa-3x`} /> {text}
      </a>
    </li>
  );
};

export default NavItem;
