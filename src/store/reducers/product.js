import { combineReducers } from "redux";
import allProducts from "../../data/data.json";

import {
  FILTER_PRODUCTS,
  FILTER_ADD,
} from "../actionTypes";

const results = (state = [], action) => {
  switch (action.type) {
    case FILTER_PRODUCTS:
      return allProducts;
    default:
      return state;
  }
};

const filters = (state = [], action) => {
  switch (action.type) {
    case FILTER_ADD:
      return action.payload;
    default:
      return state;
  }
};

const products = combineReducers({ results, filters });
export default products;