import React, { useState, useEffect } from "react";

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
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({});

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: number) => {
    return time < 10 ? `0${time}` : `${time}`;
  };

  const renderCountdownBox = (label: string, value?: number) => {
    return (
      <div style={{ display: "inline-block" }} className="text-[#009871]">
        <div className="text-2xl lg:text-5xl p-5 font-bold">
          {value ? formatTime(value) : "00"}
        </div>
        <div className="text-xl lg:text-3xl font-bold">{label}</div>
      </div>
    );
  };

  return (
    <div>
      {renderCountdownBox("Days", timeLeft.days)}
      {renderCountdownBox("Hrs", timeLeft.hours)}
      {renderCountdownBox("Mins", timeLeft.minutes)}
      {renderCountdownBox("Sec", timeLeft.seconds)}
      {Object.keys(timeLeft).length === 0 && (
        <div
          style={{ fontSize: "48px", fontWeight: "bold", marginTop: "20px" }}
          className="pt-40"
        >
          Welcome all !
        </div>
      )}
    </div>
  );
};

export default Countdown;
