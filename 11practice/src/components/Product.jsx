import React from "react";
import { useParams } from "react-router-dom";

function Product({ value }) {
  //   const params = useParams();
  return <div>{value}</div>;
}

export default Product;
