import React, {useEffect, useState} from 'react';
export default function useRandomColor(color = 'bff') {
  const [backgroundColor, setBackgroundColor] = useState(color);

  useEffect(() => {
    const setcolorInterval = setInterval(() => {
      const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
      setBackgroundColor(color);
    }, 2000);
    return () => {
      clearInterval(setcolorInterval);
    };
  }, []);

  return backgroundColor;
}
