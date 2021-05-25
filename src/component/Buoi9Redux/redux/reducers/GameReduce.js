import {
  BackgroundImage,
  Paper,
  Player,
  Bot,
  Scissor,
  Rock,
} from '../../../../../assets';
import {PLAYER_SELECT, PLAY, RESET, RESULT} from '../actions/gameAction';
const initialState = {
  arrayGame: [
    {
      id: 'scissor',
      image: Scissor,
      status: true,
    },
    {
      id: 'rock',
      image: Rock,
      status: false,
    },
    {
      id: 'paper',
      image: Paper,
      status: false,
    },
  ],
  playerSelect: {
    id: 'scissor',
    image: Scissor,
    status: true,
  },
  botSelect: {
    id: 'rock',
    image: Rock,
    status: false,
  },
  score: 0,
  times: 9,
};

const gameReducer = (state = {...initialState}, action) => {
  switch (action.type) {
    case PLAYER_SELECT:
      let newArrGame = [...state.arrayGame];
      const selectItem = state.arrayGame.find(
        item => item.id === action.payload.id,
      );

      if (!selectItem.status) {
        const previoursSelect = newArrGame.find(item => item.status);
        selectItem.status = true;
        previoursSelect.status = false;
        state.arrayGame = newArrGame;
      }
      state.playerSelect = selectItem;

      return state;
    case PLAY:
      state.botSelect = state.arrayGame[action.payload];

      return state;
    case RESULT:
      switch (state.playerSelect.id) {
        case 'paper':
          if (state.botSelect.id === 'paper') {
            state.times--;
          } else if (state.botSelect.id === 'rock') {
            state.score++;
          } else {
            if (state.score > 0) {
              state.score--;
            }
            state.times--;
          }
          break;
        case 'scissor':
          if (state.botSelect.id === 'scissor') {
            state.times--;
          } else if (state.botSelect.id === 'paper') {
            state.score++;
          } else {
            if (state.score > 0) {
              state.score--;
            }
            state.times--;
          }
          break;
        case 'rock':
          if (state.botSelect.id === 'rock') {
            state.times--;
          } else if (state.botSelect.id === 'scissor') {
            state.score++;
          } else {
            if (state.score > 0) {
              state.score--;
            }
            state.times--;
          }
          break;
      }
      return state;
    case RESET:
      const arrayGame = [
        {
          id: 'scissor',
          image: Scissor,
          status: true,
        },
        {
          id: 'rock',
          image: Rock,
          status: false,
        },
        {
          id: 'paper',
          image: Paper,
          status: false,
        },
      ];

      return {...state, ...initialState, arrayGame};
    default:
      return state;
  }
};
export default gameReducer;
