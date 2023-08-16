import axios from "axios";

export const bodyProductAPIs = {
  getAllBodyProducts: async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_BE_URL}bodyProducts`
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
