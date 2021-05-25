import {USER_COUNT_UP} from '../actions/userAction';

const initState = {
  userName: 'RN02',
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case USER_COUNT_UP:
      return {userName: 'AHiHi'};
    default:
      return {...state};
  }
};

export default userReducer;
