import axios from "axios";

export const hotProductAPIs = {
  getAllHotProducts: async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_BE_URL}hotProducts`
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
