import { useState, useMemo } from "react";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";

import AppliedFilters from "./applied-filters";
import CategoryFilter from "./category-filter";
import PriceFilter from "./price-filter";
import RatingFilter from "./rating-filter";
import ProductList from "./product-list";
import SortComponent from "./sort-component";
import PaginationComponent from "./pagination-component";
import ItemsFoundText from "./items-found-text";
import { getProducts } from "../../data/products";
import { Container } from "@material-ui/core";
import MyBreadcrumbs from "../../Components/MyBreadcrumbs";

export default function Collection() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState({min: '', max: '', isApplied: false});
  const [selectedRating, setSelectedRating] = useState("");
  const [sortBy, setSortBy] = useState("");

  const { products } = useMemo(
    () =>
      getProducts({
        selectedCategories,
        selectedPriceRange,
        selectedRating,
        sortBy,
      }),
    [selectedCategories, selectedPriceRange, selectedRating, sortBy]
  );

  return (
    <>
      <MyBreadcrumbs />
    <Container>
    <Grid container spacing={1}>
      <Grid item sm={2}>
        <CategoryFilter
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
        />
        <PriceFilter
          selectedPriceRange={selectedPriceRange}
          setSelectedPriceRange={setSelectedPriceRange}
        />
        <RatingFilter
          selectedRating={selectedRating}
          setSelectedRating={setSelectedRating}
        />
      </Grid>
      <Grid item sm={10}>
        <Grid container justify="space-between" alignItems="center">
          <Grid item>
            <ItemsFoundText total={products.length} searchString=""/>
          </Grid>
          <Grid item>
            <SortComponent sortBy={sortBy} setSortBy={setSortBy} />
          </Grid>
        </Grid>
        <AppliedFilters
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
          selectedPriceRange={selectedPriceRange}
          setSelectedPriceRange={setSelectedPriceRange}
          selectedRating={selectedRating}
          setSelectedRating={setSelectedRating}
        />
        <Divider style={{margin: "16px"}}/>
        <ProductList
          products={products}
        />
        <PaginationComponent />
      </Grid>
    </Grid>
    </Container>
    </>
  );
}
