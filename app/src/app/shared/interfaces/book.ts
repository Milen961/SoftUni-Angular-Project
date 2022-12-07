import { IUser } from "./user";

export interface IBook {
  themeName: string;
  subscribers: string[];
  userId: IUser;
  posts: string[];
  created_at: string;
  updated_at: string;
}
