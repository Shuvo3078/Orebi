import React from 'react';
import { Link } from 'react-router-dom';

const Image = ({href, src, alt, className}) => {
  return (
    <Link to={href}>
    <picture>
        <img className={className} src={src} alt={alt}></img>
    </picture>
    </Link>
  );
}

export default Image;
