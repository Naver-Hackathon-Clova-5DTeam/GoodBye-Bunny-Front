import client from "./client";

export const postReview = async ({ title, content }: ReviewType) => {
  try {
    const res = await client.post("/review", { title, content });
    return res;
  } catch (err) {
    throw err;
  }
};
