import axios from "axios";

export const newProductAPIs = {
  getAllNewProducts: async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_BE_URL}newProducts`
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
