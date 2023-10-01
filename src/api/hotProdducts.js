import axios from "axios";

export const hotProductAPIs = {
  getAllHotProducts: async (keySearch) => {
    const response = await axios.get(
      `${process.env.REACT_APP_BE_URL}hotProducts?q=${keySearch}`
    );
    return response;
  },
  getHotProductById: async (hotProductId) => {
    const response = await axios.get(
      `${process.env.REACT_APP_BE_URL}hotProducts/${hotProductId}`
    );
    return response.data;
  },
};
