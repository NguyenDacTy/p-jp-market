import axios from "axios";

export const newProductAPIs = {
  getAllNewProducts: async (keySearch) => {
    const response = await axios.get(
      `${process.env.REACT_APP_BE_URL}newProducts?q=${keySearch}`
    );
    return response;
  },
  getNewProductById: async (newProductId) => {
    const response = await axios.get(
      `${process.env.REACT_APP_BE_URL}newProducts/${newProductId}`
    );
    return response.data;
  },
};
