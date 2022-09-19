import axios from "axios";

export const BASE_APP_URL = "http://localhost:8000/";

export const api = axios.create({
  baseURL: `${BASE_APP_URL}api`,
});

export const getDataFromApi = async (URL, userToken) => {
  try {
    const response = await api.get(URL, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${userToken}`,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    if (error.response) {
      console.log(error.response.data.error);
    }
  }
};
