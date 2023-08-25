import axios from "axios";

export const hotComboProductAPIs = {
  getAllHotComboProducts: async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_BE_URL}hotComboProducts`
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
