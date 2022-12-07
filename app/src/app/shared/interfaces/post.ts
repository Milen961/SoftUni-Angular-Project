import { IBook} from "./book";
import { IUser } from "./user";

export interface IPost {
  likes: string[];
  _id: string;
  text: string;
  userId: IUser;
  bookId: IBook;
  created_at: string;
  updatedAt: string;
  __v: number;
}
