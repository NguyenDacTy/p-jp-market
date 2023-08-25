import axios from "axios";

export const momAndBabyProductAPIs = {
  getAllMomAndBabyProducts: async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_BE_URL}momAndBabyProducts`
    );
    return response;
  },
  getMomAndBabyProductById: async (momAndBabyProductId) => {
    const response = await axios.get(
      `${process.env.REACT_APP_BE_URL}momAndBabyProducts/${momAndBabyProductId}`
    );
    return response.data;
  },
};
