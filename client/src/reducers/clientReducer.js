import { GET_ALL_CLIENT } from '../actions/actionTypes';

const initialState = {
  clients: '',
  isLoading: false,
};

export const ClientReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CLIENT:
      return {
        ...state,
        clients: action.client.data.data
      };
    default:
      return state;
  }
};