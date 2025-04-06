const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const getAuthors = async (page) => {
  try {
    const response = await fetch(`${BACKEND_URL}/api/authors?page=${page}`);

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error.message);
  }
};
