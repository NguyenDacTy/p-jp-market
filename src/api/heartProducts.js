import axios from "axios";

export const heartProductAPIs = {
  getAllHeartProducts: async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_BE_URL}heartProducts`
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
