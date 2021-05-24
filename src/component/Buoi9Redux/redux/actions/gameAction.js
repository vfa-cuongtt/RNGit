export const PLAYER_SELECT = 'PLAYER_SELECT';
export const PLAY = 'PLAY';
export const RESULT = 'RESULT';
export const RESET = 'RESET';

export const playSelect = item => ({
  type: PLAYER_SELECT,
  playload: item,
});

export const play = id => ({
  type: PLAY,
  payload: id,
});

export const getResult = () => ({
  type: RESULT,
});

export const reset = () => ({
  type: RESET,
});
