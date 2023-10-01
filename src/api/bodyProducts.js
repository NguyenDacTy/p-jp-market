import axios from "axios";

export const bodyProductAPIs = {
  getAllBodyProducts: async (keySearch) => {
    const response = await axios.get(
      `${process.env.REACT_APP_BE_URL}bodyProducts?q=${keySearch}`
    );
    return response;
  },
  getBodyProductById: async (bodyProductId) => {
    const response = await axios.get(
      `${process.env.REACT_APP_BE_URL}bodyProducts/${bodyProductId}`
    );
    return response.data;
  },
};
