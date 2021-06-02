import Fuse from "fuse.js";

export const productsDb = [
  {
    id: 1,
    image: "/images/products/burger.png",
    title: "Burger1",
    description:
      "Enjoy the crispy chiken fillet in a soft bun with spicy mayo and our signature sauce",
    price: 100,
    category: "Burger",
    rating: 5,
  },
  {
    id: 2,
    image: "/images/products/shawarma.jpg",
    title: "Shawarma1",
    description:
      "Aromatic arabian rice with 6 pacs of hot shots with KFC famous vietnamese sauce",
    price: 200,
    category: "Shawarma",
    rating: 4,
  },
  {
    id: 3,
    image: "/images/products/piz.jpg",
    title: "Pizza1",
    description: "Crispy zinger with crispy rolled into paratha",
    price: 300,
    category: "Pizza",
    rating: 3,
  },
  {
    id: 4,
    image: "/images/products/burger.png",
    title: "Burger2",
    description:
      "Enjoy the crispy chiken fillet in a soft bun with spicy mayo and our signature sauce",
    price: 400,
    category: "Burger",
    rating: 2,
  },
  {
    id: 5,
    image: "/images/products/shawarma.jpg",
    title: "Shawarma2",
    description:
      "Aromatic arabian rice with 6 pacs of hot shots with KFC famous vietnamese sauce",
    price: 500,
    category: "Shawarma",
    rating: 1,
  },
  {
    id: 6,
    image: "/images/products/piz.jpg",
    title: "Pizza2",
    description: "Crispy zinger with crispy rolled into paratha",
    price: 600,
    category: "Pizza",
    rating: 5,
  },
  {
    id: 7,
    image: "/images/products/burger.png",
    title: "Burger3",
    description:
      "Enjoy the crispy chiken fillet in a soft bun with spicy mayo and our signature sauce",
    price: 700,
    category: "Burger",
    rating: 4,
  },
  {
    id: 8,
    image: "/images/products/shawarma.jpg",
    title: "Shawarma3",
    description:
      "Aromatic arabian rice with 6 pacs of hot shots with KFC famous vietnamese sauce",
    price: 800,
    category: "Shawarma",
    rating: 3,
  },
  {
    id: 9,
    image: "/images/products/piz.jpg",
    title: "Pizza3",
    description: "Crispy zinger with crispy rolled into paratha",
    price: 900,
    category: "Pizza",
    rating: 2,
  },
];

export const getProductById = (id) => {
  return productsDb.find(product => product.id === Number(id));
}

const getSearchData = (data, searchString) => {
  const fuse = new Fuse(data, {
    threshold: 0.6,
    minMatchCharLength: 2,
    keys: ["title", "category", "description"],
  });
  return fuse.search(searchString);
};

const getFilterData = (
  data,
  selectedCategories,
  selectedPriceRange,
  selectedRating
) => {
  return data.filter(product => {
    // category filter
    let categoryMatch = true;
    if (selectedCategories.length && product.category)
      categoryMatch = selectedCategories.includes(product.category);

    // price filter
    let priceMatch = true;
    const { min, max, isApplied } = selectedPriceRange;
    if (isApplied && product.price)
      priceMatch = product.price >= min && product.price <= max;

    // rating filter
    let ratingMatch = true;
    if (selectedRating && product.rating)
      ratingMatch = Number(product.rating) >= Number(selectedRating);

    return categoryMatch && priceMatch && ratingMatch;
  });
};

const getSortData = (data, sortBy) => {
  return data.sort((product1, product2) => {
    if (sortBy === "PriceHighToLow") {
      return product1.price > product2.price ? -1 : 1;
    } else if (sortBy === "PriceLowToHigh") {
      return product1.price < product2.price ? -1 : 1;
    } else if (sortBy === "RatingLowToHigh") {
      return product1.rating < product2.rating ? -1 : 1;
    } else {
      // default 'RatingHighToLow'
      return product1.rating > product2.rating ? -1 : 1;
    }
  });
};

const getPageData = (data, indexFrom, limit) => {
  return data.slice(indexFrom, indexFrom + limit);
};

export const getProducts = ({
  searchString,
  selectedCategories,
  selectedPriceRange,
  selectedRating,
  sortBy,
  indexFrom,
  limit,
}) => {
  let products = productsDb;
  if (searchString) products = getSearchData(products, searchString);

  if (
    selectedCategories.length ||
    selectedPriceRange.isApplied ||
    selectedRating
  )
    products = getFilterData(
      products,
      selectedCategories,
      selectedPriceRange,
      selectedRating
    );
  const total = products.length;

  products = getSortData(products, sortBy);

  if (indexFrom && limit) products = getPageData(products, indexFrom, limit);

  const hasMoreData = total > indexFrom + limit;
  return { products, total, hasMoreData };
};

const findPriceRange = () => {
  let min = productsDb[0].price;
  let max = 0;
  productsDb.forEach(p => {
    if (p.price < min) min = p.price;
    if (p.price > max) max = p.price;
  });
  return { min, max };
};

// get price range in an array i.e., [min, max]
export const priceRange = findPriceRange();