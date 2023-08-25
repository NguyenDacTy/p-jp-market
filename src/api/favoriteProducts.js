import axios from "axios";

export const favoriteProductAPIs = {
  getAllFavoriteProducts: async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_BE_URL}favoriteProducts`
    );
    return response;
  },
  getFavoriteProductById: async (favoriteProductId) => {
    const response = await axios.get(
      `${process.env.REACT_APP_BE_URL}favoriteProducts/${favoriteProductId}`
    );
    return response.data;
  },
};
