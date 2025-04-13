import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const getAuthors = async (page, textSearch) => {
  try {
    const response = await axios.get(
      `${BACKEND_URL}/api/authors?page=${page}&search=${textSearch}`,
    );

    if (response.status !== 200) {
      throw new Error(`Response status: ${response.status}`);
    }

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const addAuthor = async (data) => {
  try {
    console.log(data);
    const response = await axios.post(`${BACKEND_URL}/api/authors`, data);

    if (response.status !== 200) {
      throw new Error(`Response status: ${response.status}`);
    }

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const updateAuthor = async (data) => {
  try {
    const response = await axios.put(
      `${BACKEND_URL}/api/authors/${data.id}`,
      data,
    );

    if (response.status !== 200) {
      throw new Error(`Response status: ${response.status}`);
    }

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deleteAuthor = async (data) => {
  try {
    const response = await axios.delete(
      `${BACKEND_URL}/api/authors/${data.id}`,
    );

    if (response.status !== 200) {
      throw new Error(`Response status: ${response.status}`);
    }

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
