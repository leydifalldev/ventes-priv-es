import { combineReducers } from "redux";
import allProducts from "../../data/data.json";

import {
  FILTER_PRODUCTS,
} from "../actionTypes";

const results = (state = [], action) => {
  switch (action.type) {
    case FILTER_PRODUCTS:
      return allProducts;
    default:
      return state;
  }
};

const products = combineReducers({ results });
export default products;