import ActionTypes from '../ActionTypes';

const cardsFetchDataSuccess = (cards: any) => ({

  type: ActionTypes.GET_CARDS,

  cards,

});

export default cardsFetchDataSuccess;
