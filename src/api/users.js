import axios from "axios";

export const users = {
  getUsers: async () => {
    const response = await axios.get(`${process.env.REACT_APP_BE_URL}users`);
    return response;
  },
  getUsers: async (keyLgEmail) => {
    const response = await axios.get(
      `${process.env.REACT_APP_BE_URL}users?q=${keyLgEmail}`
    );
    return response;
  },
  getUsers: async (keyLgPass) => {
    const response = await axios.get(
      `${process.env.REACT_APP_BE_URL}users?q=${keyLgPass}`
    );
    return response;
  },
  createUser: async (user) => {
    console.log(user, "asdsadasds");
    return await axios.post(`${process.env.REACT_APP_BE_URL}users`, user);
  },
};
