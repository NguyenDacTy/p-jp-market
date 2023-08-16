import axios from "axios";

export const hotProductsAPIs = {
  getAllHotProducts: async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_BE_URL}hotProducts`
    );
    return response;
  },
  getHotProductById: async (hotProductsId) => {
    const response = await axios.get(
      `${process.env.REACT_APP_BE_URL}hotProducts/${hotProductsId}`
    );
    return response.data;
  },
};
