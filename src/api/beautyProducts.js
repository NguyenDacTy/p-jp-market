import axios from "axios";

export const beautyProductAPIs = {
  getAllBeautyProducts: async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_BE_URL}beautyProducts`
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
