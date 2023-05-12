import { publicAxios } from "../utils/axios.helpers.js";
import {
  GET_CATEGORIES_PENDING,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_ERROR,
} from "../types/categories.types.js";

const getCategories = () => async (dispatch) => {
  dispatch({ type: GET_CATEGORIES_PENDING });
  try {
    const { data } = await publicAxios.get("/product/categories/");
    dispatch({ type: GET_CATEGORIES_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_CATEGORIES_ERROR, payload: error });
  }
};

export { getCategories };
