import { connect } from "react-redux"
import { bindActionCreators } from "redux";
import ProductLayoutView from "./ProductLayoutView";
import { loadProducts } from "../../store/actions";
import { getProducts, getFilteredProduct } from "../../store/selectors";
;

const mapStateToProps = state => ({
  products: getFilteredProduct(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({ loadProducts }, dispatch);

const ProductLayout = connect(mapStateToProps, mapDispatchToProps)(ProductLayoutView);
export default ProductLayout;