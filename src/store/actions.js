import {
  FILTER_PRODUCTS,
} from "./actionTypes";

export const loadProducts = (filters) => async dispatch => {
  dispatch({
    type: FILTER_PRODUCTS,
    payload: filters
  })
}