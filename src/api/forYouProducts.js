import axios from "axios";

export const forYouProductAPIs = {
  getAllForYouProducts: async (keySearch) => {
    const response = await axios.get(
      `${process.env.REACT_APP_BE_URL}forYouProducts?q=${keySearch}`
    );
    return response;
  },
  getForYouProductById: async (forYouProductId) => {
    const response = await axios.get(
      `${process.env.REACT_APP_BE_URL}hotProducts/${forYouProductId}`
    );
    return response.data;
  },
};
