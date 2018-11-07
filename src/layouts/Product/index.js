import { connect } from "react-redux"
import { bindActionCreators } from "redux";
import ProductLayoutView from "./ProductLayoutView";
import { loadProducts } from "../../store/actions";
import { getProducts, getFilteredProduct, getFiltersFormValues } from "../../store/selectors";
import { reduxForm } from 'redux-form';


const mapStateToProps = state => ({
  products: getFilteredProduct(state),
  filters: getFiltersFormValues(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({ loadProducts }, dispatch);

const ProductLayout = connect(mapStateToProps, mapDispatchToProps)(ProductLayoutView);

export default reduxForm({
  form: 'filters'
})(ProductLayout);