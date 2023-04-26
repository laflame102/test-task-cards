import axios from "axios";

axios.defaults.baseURL = "https://642b3d37208dfe254714fcba.mockapi.io";

export const getUserInfo = async () => {
  try {
    const response = await axios.get("/users");
    return response.data;
  } catch (error) {
    return Promise.reject(new Error(error));
  }
};

export const updateUser = async (userId, updatedUser) => {
  try {
    const response = await axios.put(`/users/${userId}`, updatedUser);
    return response.data;
  } catch (error) {
    return Promise.reject(new Error(error));
  }
};
