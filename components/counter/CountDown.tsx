import React, { useState, useEffect } from 'react';

interface CountdownProps {
  targetDate: Date;
}

interface TimeLeft {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +targetDate - +new Date();
    let timeLeft: TimeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const formatTime = (time: number) => {
    return time < 10 ? `0${time}` : `${time}`;
  };

  const renderCountdownBox = (label: string, value?: number) => {
    return (
      <div style={{ display: 'inline-block', margin: '0 10px' }}>
        <div style={{ fontSize: '72px', fontWeight: 'bold', border: '1px solid black', padding: '20px' }}>
          {value ? formatTime(value) : '00'}
        </div>
        <div style={{ textAlign: 'center', fontSize: '40px' }}>
          {label}
        </div>
      </div>
    );
  };

  return (
    <div>
      {renderCountdownBox('Days', timeLeft.days)}
      {renderCountdownBox('Hrs', timeLeft.hours)}
      {renderCountdownBox('Mins', timeLeft.minutes)}
      {renderCountdownBox('Sec', timeLeft.seconds)}
      {Object.keys(timeLeft).length === 0 && (
        <div style={{ fontSize: '48px', fontWeight: 'bold', marginTop: '20px' }}>
          Countdown finished!
        </div>
      )}
    </div>
  );
};

export default Countdown;
