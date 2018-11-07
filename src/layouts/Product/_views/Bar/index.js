import React from "react";
import { reduxForm } from 'redux-form';
import SearchBarView from "./BarView";

export const SearchBar = reduxForm({
  form: 'filters'
})(SearchBarView);
