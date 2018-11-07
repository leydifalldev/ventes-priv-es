import { createSelector } from 'reselect'

export const getProducts = state => state.products.results;
export const getFilters = state => ({
})

export const multiFilter = (array, filters) => {
  const filterKeys = Object.keys(filters);
  return array.filter((item) => {
    return filterKeys.every(key => !!~filters[key].indexOf(item[key]));
  });
}

export const getFilteredProduct = createSelector(getProducts, getFilters, (all, filters) => multiFilter(all, filters));

export const getFiltersFormValues = state => {
  const { filters } = state.form;
  return (filters && filters.values) || {};
};