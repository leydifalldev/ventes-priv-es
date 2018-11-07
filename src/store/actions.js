import {
  FILTER_PRODUCTS,
  FILTER_ADD
} from "./actionTypes";

export const loadProducts = (filters) => async dispatch => {
  dispatch({
    type: FILTER_PRODUCTS,
    payload: filters
  })
}

export const addFilters = (filters) => {
  dispatch({
    type: FILTER_ADD,
    payload: filters
  })
}