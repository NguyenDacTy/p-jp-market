import axios from "axios";

export const heartProductsAPIs = {
  getAllHeartProducts: async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_BE_URL}heartProducts`
    );
    return response;
  },
  getHeartProductById: async (heartProductsId) => {
    const response = await axios.get(
      `${process.env.REACT_APP_BE_URL}heartProducts/${heartProductsId}`
    );
    return response.data;
  },
};
