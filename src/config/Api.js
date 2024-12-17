import axios from "axios";

const read_token = process.env.READ_TOKEN || "c59aa36e9b42d99600275eafeddaba5e3d135faf";

export const blogList = async (pagesize) => {
  const url = `
  https://api.buttercms.com/v2/posts?auth_token=${read_token}&page_size=${pagesize}`;
  return axios.get(url).then((res) => {
    return res.data.data;
  });

};
export const blog = async (slug) => {
  const url = `https://api.buttercms.com/v2/posts/${slug}/?auth_token=${read_token}`;
  return axios.get(url).then((res) => {
    return res.data.data;
  });
};