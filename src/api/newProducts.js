import axios from "axios";

export const newProductsAPIs = {
  getAllNewProducts: async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_BE_URL}newProducts`
    );
    return response;
  },
  getNewProductById: async (newProductsId) => {
    const response = await axios.get(
      `${process.env.REACT_APP_BE_URL}newProducts/${newProductsId}`
    );
    return response.data;
  },
};
