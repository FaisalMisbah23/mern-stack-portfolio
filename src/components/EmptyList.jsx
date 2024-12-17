import React from 'react';
import '../index.css';
import empty from '../assets/empty.gif';

const EmptyList = () => (
  <div className='flex justify-center'>
    <img src={empty} alt='empty' className='w-full max-w-[250px]' />
  </div>
);
export default EmptyList;