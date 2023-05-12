import {
  GET_CATEGORIES_PENDING,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_ERROR,
} from "../types/categories.types.js";

const initialState = {
  data: [],
  pending: false,
  error: null,
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES_PENDING:
      return {
        ...state,
        pending: true,
      };
    case GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        pending: false,
        data: action.payload,
      };
    case GET_CATEGORIES_ERROR:
      return {
        ...state,
        pending: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default categoriesReducer;
