import axios from "axios";

export const hotBrandProductAPIs = {
  getAllHotBrandProducts: async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_BE_URL}hotBrandProducts`
    );
    return response;
  },
  getHotBrandProductById: async (hotBrandProductId) => {
    const response = await axios.get(
      `${process.env.REACT_APP_BE_URL}hotBrandProducts/${hotBrandProductId}`
    );
    return response.data;
  },
};
