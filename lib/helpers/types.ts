export type Entity = "users" | "posts" | "comments" | "todos";

export type Method = "get" | "post" | "put" | "patch" | "delete";
export type WithId = { id: number };
export type Post = {
  id?: number;
  user_id: number;
  title: string;
  body: string;
};

export type User = {
  id?: number;
  name: string;
  email: string;
  gender: string;
  status: string;
};

export type Comment = {
  id?: number;
  post_id?: number;
  name: string;
  email: string;
  body: string;
};

export type Todo = {
  id?: number;
  user_id: number;
  title: string;
  due_on: string;
  status: "pending" | "completed";
};

export type Resource = Post | User | Comment | Todo;
