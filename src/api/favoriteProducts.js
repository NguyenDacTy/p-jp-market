import axios from "axios";

export const favoriteProductAPIs = {
  getAllFavoriteProducts: async (keySearch) => {
    const response = await axios.get(
      `${process.env.REACT_APP_BE_URL}favoriteProducts?q=${keySearch}`
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
