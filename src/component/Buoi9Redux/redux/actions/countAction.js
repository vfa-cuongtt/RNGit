export const COUNT_UP = 'COUNT_UP';
export const COUNT_DOWN = 'COUNT_DOWN';

export const countUp = payload => {
  return {
    type: COUNT_UP,
    payload,
  };
};

export const countDown = payload => {
  return {
    type: COUNT_DOWN,
    payload,
  };
};
