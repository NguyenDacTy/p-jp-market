import axios from "axios";

export const beautyProductAPIs = {
  getAllBeautyProducts: async (keySearch) => {
    const response = await axios.get(
      `${process.env.REACT_APP_BE_URL}beautyProducts?q=${keySearch}`
    );
    return response;
  },
  getBeautyProductById: async (beautyProductId) => {
    const response = await axios.get(
      `${process.env.REACT_APP_BE_URL}beautyProducts/${beautyProductId}`
    );
    return response.data;
  },
};
