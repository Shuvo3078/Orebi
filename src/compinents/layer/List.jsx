import React from 'react';
import { Link } from 'react-router-dom'

const List = ({href, text, className}) => {
  return (
    <li>
      <Link className={` block ${className}`} to={href}>{text}</Link>
    </li>
  );
}

export default List;
