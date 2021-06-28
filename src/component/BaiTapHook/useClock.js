import {useEffect, useState} from 'react';

const formatTime = date => {
  const hour = `${date.getHours()}`.padStart(2, '0');
  const minutes = `${date.getMinutes()}`.padStart(2, '0');
  const seconds = `${date.getSeconds()}`.padStart(2, '0');
  return `${hour}:${minutes}:${seconds}`;
};
export default function useClock() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const clock = setInterval(() => {
      const now = new Date();
      const newTime = formatTime(now);
      setTime(newTime);
    }, 1000);
    return () => {
      clearInterval(clock);
    };
  }, []);

  return time;
}
