import axios from "axios";

export const ProductAPIs = {
  getAllProducts: async (keySearch) => {
    const response = await axios.get(
      `${process.env.REACT_APP_BE_URL}products?q=${keySearch}`
    );
    return response;
  },
  getProductById: async (productId) => {
    const response = await axios.get(
      `${process.env.REACT_APP_BE_URL}products/${productId}`
    );
    return response.data;
  },
};
