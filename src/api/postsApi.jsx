import httpRequest from "../utils/httpRequest";

export const getPosts = async () => {
  try {
    const res = await httpRequest.get("posts");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
