import React from 'react';
import { HashLoader } from 'react-spinners';

const Loading = () => {
  return (
    <div className='flex justify-center items-center'>
      <HashLoader />
    </div>
  );
};

export default Loading;