import axios from "axios";

export const forYouProductsAPIs = {
  getAllForYouProducts: async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_BE_URL}forYouProducts`
    );
    return response;
  },
  getForYouProductById: async (forYouProductsId) => {
    const response = await axios.get(
      `${process.env.REACT_APP_BE_URL}hotProducts/${forYouProductsId}`
    );
    return response.data;
  },
};
