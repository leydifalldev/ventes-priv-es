import React, { Component } from "react";
import SearchBar from "./_views/Bar";
import { ProductGrid } from "./_views/Grid/GridView";

export default class ProductLayoutView extends Component {
  componentDidMount() {
    let { loadProducts } = this.props;
    loadProducts();
  }

  render() {
    let { products } = this.props;
    console.log("products LOG", products);
    return (
      <div>
        <SearchBar />
        <ProductGrid products={products} />
      </div>
    )
  }
}