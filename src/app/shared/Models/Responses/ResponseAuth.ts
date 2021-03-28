import { User } from '../User';

export interface ResponseAuth {
  token: string;
  user: User;
}
