import client from "./client";

export const postReview = async ({ title, content }: ReviewType) => {
  try {
    const res = await client.post("/review", { title, content });
    return res;
  } catch (err) {
    throw err;
  }
};

export const getComment = async ({ review_id }: CommentPostType) => {
  try {
    const res = await client.get(`/review/${review_id}/comment`);
    return res;
  } catch (err) {
    throw err;
  }
};
