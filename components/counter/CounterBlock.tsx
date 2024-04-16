import React from 'react';
import Countdown from './CountDown'; // Assuming the Countdown component is in a file named Countdown.tsx

export const CounterBlock = () => {
  const targetDate = new Date('2024-04-24T23:59:59');
  return (
    <>
      <div className='flex flex-row gap-10'>
      <Countdown targetDate={targetDate} />
      </div>
    </>
  )
}