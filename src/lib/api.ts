import { API_URL } from "@/utils/constants";
import axios from "axios";

const api = axios.create({
  baseURL: API_URL,
  headers: { "Content-Type": "application/json" },
});

export const getPosts = async () => {
  const { data } = await api.get("/posts");
  return data;
};

export const getUsers = async () => {
  const { data } = await api.get("/users");
  return data;
};

export const getPost = async (postId: number) => {
  const { data } = await api.get(`posts/${postId}`);
  return data;
}

export const getUser = async (userId: number) => {
  const { data } = await api.get(`users/${userId}`);
  return data;
};

export const getUserTodos = async (userId: number) => {
  const { data } = await api.get(`users/${userId}/todos`);
  return data;
};

export const getPostComments = async (postId: number) => {
  const { data } = await api.get(`posts/${postId}/comments`);
  return data;
};
