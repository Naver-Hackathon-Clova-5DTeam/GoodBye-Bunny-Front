import client from "./client";

export const postReview = async ({ title, content }: ReviewType) => {
  try {
    const res = await client.post("/review", { title, content });
    return res;
  } catch (err) {
    throw err;
  }
};

export const getComment = async ({ review_id }: CommentGetType) => {
  try {
    const res = await client.get(`/review/${review_id}/comment`);
    return res;
  } catch (err) {
    throw err;
  }
};

export const patchReview = async ({ title, content }: ReviewType) => {
  try {
    const res = await client.patch(`/review`, { title, content });
    return res;
  } catch (err) {
    throw err;
  }
};

export const postComment = async ({
  review_id,
  commentContent,
}: CommentPostType) => {
  try {
    const res = await client.post(`/comment/${review_id}`, { commentContent });
    return res;
  } catch (err) {
    throw err;
  }
};

export const getMyReview = async () => {
  try {
    const res = await client.get("/review");
    return res;
  } catch (err) {
    throw err;
  }
};

// id 필요한지 확인
export const getRecommends = async () => {
  try {
    const res = await client.get(`/review/recommend`);
    return res;
  } catch (err) {
    throw err;
  }
};
