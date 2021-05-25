import {COUNT_UP, COUNT_DOWN} from '../actions/countAction';
const initState = {
  number: 10,
};

const countReducer = (state = initState, action) => {
  // immutable => tinh bat bien,  Va tinh bat dong bo
  //   Reference type
  switch (action.type) {
    case COUNT_UP:
      console.log(action);
      state.number = state.number + action.payload;

      return {...state};

    //   return {number: state.number + 1};
    case COUNT_DOWN:
      //   return {number: state.number - 1};
      state.number--;
      return {...state};
    default:
      return {...state};
  }
};
export default countReducer;
