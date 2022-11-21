import React, { useEffect } from "react";
import { useProducts } from "../../contexts/ProductContext";
import ProductCard from "./ProductCard";
import "../../styles/ProductsList.css";
import Pagination from "@mui/material/Pagination";
const ProductList = () => {
  const { products, getProducts } = useProducts();
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const itemsPerPage = 6;
  const count = Math.ceil(products.length / itemsPerPage);

  function currentData() {
    const begin = (page - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return products.slice(begin, end);
  }

  return (
    <div>
      <div className="products-list">
        {products ? (
          currentData().map((item) => <ProductCard key={item.id} item={item} />)
        ) : (
          <h3>Loading...</h3>
        )}
      </div>
      <Pagination
        className="pagination"
        count={count}
        page={page}
        onChange={handleChange}
      />
    </div>
  );
};

export default ProductList;
