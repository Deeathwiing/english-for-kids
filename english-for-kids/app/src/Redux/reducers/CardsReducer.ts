import ActionTypes from '../ActionTypes';

const CardsReducer = (state = [], action: { type: string; cards: any }) => {
  switch (action.type) {
    case ActionTypes.GET_CARDS:
      return [...state, ...action.cards];
    default:
      return state;
  }
};

export default CardsReducer;
