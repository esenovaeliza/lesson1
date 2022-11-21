import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";

import { ACTIONS, JSON_API_PRODUCTS } from "../helpers/consts";

export const productContext = createContext();

export const useProducts = () => useContext(productContext);

const INIT_STATE = {
  products: [],
  productDetails: null,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTIONS.GET_PRODUCTS:
      return { ...state, products: action.payload };

    case ACTIONS.GET_PRODUCT_DETAILS:
      return { ...state, productDetails: action.payload };

    default:
      return state;
  }
};

const ProductContextProvaider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  //! get all products

  const getProducts = async () => {
    const { data } = await axios(JSON_API_PRODUCTS);

    dispatch({ type: ACTIONS.GET_PRODUCTS, payload: data });
  };

  const values = { getProducts, products: state.products };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvaider;
