import axios from "axios";

export const heightPlusProductAPIs = {
  getAllHeightPlusProducts: async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_BE_URL}heightPlusProducts`
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
