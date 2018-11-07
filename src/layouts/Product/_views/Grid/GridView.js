import React, { Component } from "react";
import { Card } from "../../../../components/Card";

export const ProductGrid = ({ products }) => {
  return (
    <div className="grid-layout container">
      {products.map(product => <Card item={product} />)}
    </div>
  );
}