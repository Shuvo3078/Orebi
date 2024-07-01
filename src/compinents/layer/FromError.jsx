import React from 'react';

const FromError = ({error}) => {
  return (
    <p className='text-xs text-white bg-red-400 rounded-md px-1 absolute top-full translate-y-1'>{error}</p>
  );
}

export default FromError;
