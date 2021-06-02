import React, { useMemo } from "react";
import { useHistory, useParams } from "react-router-dom";
import { ReviewListing } from "./review-listing";
import { getProductById } from "../../data/products";
import MyBreadcrumbs from "../../Components/MyBreadcrumbs";
import RelatedProducts from "./RelatedProducts";
import { ProductDetail } from "./ProductDetail";

export default function Detail() {
  let { id } = useParams();
  let history = useHistory();

  let product = useMemo(() => getProductById(id), [id]);

  if (!product) {
    history.push("/not-found");
    return null;
  }

  return (
    <>
      <MyBreadcrumbs />
      <ProductDetail product={product} />
      <ReviewListing />
      <RelatedProducts />
    </>
  );
}
