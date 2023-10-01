import axios from "axios";

export const hotComboProductAPIs = {
  getAllHotComboProducts: async (keySearch) => {
    const response = await axios.get(
      `${process.env.REACT_APP_BE_URL}hotComboProducts?q=${keySearch}`
    );
    return response;
  },
  getHotComboProductById: async (hotComboProductId) => {
    const response = await axios.get(
      `${process.env.REACT_APP_BE_URL}hotComboProducts/${hotComboProductId}`
    );
    return response.data;
  },
};
