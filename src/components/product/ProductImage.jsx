import React from "react";
import { API } from "../../config";

const ProductImage = ({ item, url }) => (
  <div className="product-img text-center">
    <img
      className="mb-3"
      src={`${API}/${url}/photo/${item._id}`}
      alt={item.name}
      style={{ maxHeight: "100%", maxWidth: "100%" }}
    />
  </div>
);

export default ProductImage;
