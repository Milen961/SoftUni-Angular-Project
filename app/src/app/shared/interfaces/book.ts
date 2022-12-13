import { IUser } from "./user";

export interface IBook {
  bookName: string;
  subscribers: string[];
  userId: IUser;
  posts: string[];
  created_at: string;
  updated_at: string;
}
