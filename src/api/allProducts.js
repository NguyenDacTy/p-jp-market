import axios from "axios";

export const allProductAPIs = {
  getAllAllProducts: async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_BE_URL}allProducts`
    );
    return response;
  },
  getAllProductById: async (allProductId) => {
    const response = await axios.get(
      `${process.env.REACT_APP_BE_URL}allProducts/${allProductId}`
    );
    return response.data;
  },
};
