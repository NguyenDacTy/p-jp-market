import axios from "axios";

export const heightPlusProductAPIs = {
  getAllHeightPlusProducts: async (keySearch) => {
    const response = await axios.get(
      `${process.env.REACT_APP_BE_URL}heightPlusProducts?q=${keySearch}`
    );
    return response;
  },
  getHeightPlusProductById: async (heightPlusProductId) => {
    const response = await axios.get(
      `${process.env.REACT_APP_BE_URL}heightPlusProducts/${heightPlusProductId}`
    );
    return response.data;
  },
};
