import axios from "axios";

export const heartProductAPIs = {
  getAllHeartProducts: async (keySearch) => {
    const response = await axios.get(
      `${process.env.REACT_APP_BE_URL}heartProducts?q=${keySearch}`
    );
    return response;
  },
  getHeartProductById: async (heartProductId) => {
    const response = await axios.get(
      `${process.env.REACT_APP_BE_URL}heartProducts/${heartProductId}`
    );
    return response.data;
  },
};
