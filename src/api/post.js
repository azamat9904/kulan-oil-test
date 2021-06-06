import api from "./api";

const URLS = {
    postUrl: "/posts",
};

export const getPosts = () => api.get(URLS.postUrl, {});
export const addPost = (postData) => api.post(URLS.postUrl, postData);
export const updatePost = (postData, id) => api.put(URLS.postUrl + `/${id}`, postData);
export const deletePost = (id) => api.delete(URLS.postUrl + `/${id}`);
export const getPostById = (id) => api.get(URLS.postUrl + `/${id}`);
