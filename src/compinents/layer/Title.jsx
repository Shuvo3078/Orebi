import React from 'react';

const Title = ({text, className}) => {
  return (
   
        <h2 className={`text-[#262626] font-DM lg:text-[39px] text-2xl font-bold ${className} px-3md:px-0`}>{text}</h2>
      
  );
}

export default Title;
