import React from "react";
const noImage = "../../assets/no-image.jpg";

export const Card = ({ item }) => (
  <div className="card grid-item">
    <div className="info">
      <div>
        <div>{item.domain}</div>
        <div>{item.appellation}</div>
        <div>{item.millesime}</div>
      </div>
      <div className="left-section">{item.price_vp_unit} {item.currency || "€"}</div>
    </div>
    <img src={item.img || noImage} />
  </div>
);