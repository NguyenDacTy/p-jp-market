import axios from "axios";

export const forYouProductAPIs = {
  getAllForYouProducts: async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_BE_URL}forYouProducts`
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
