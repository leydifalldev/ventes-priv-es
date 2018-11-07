import React, { Component } from "react";
import { SearchBar } from "./_views/Bar";
import { Header } from "./_views/Header";
import { ProductGrid } from "./_views/Grid/GridView";

export default class ProductLayoutView extends Component {
  componentDidMount() {
    let { loadProducts } = this.props;
    loadProducts();
  }

  render() {
    let { products, filters } = this.props;
    console.log("products LOG", filters);
    return (
      <div>
        <Header nbProduct={products.length} />
        <SearchBar />
        <ProductGrid products={products} />
      </div>
    )
  }
}