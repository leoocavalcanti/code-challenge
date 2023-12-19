export interface IUser {
  user: User;
}

export type User = {
  id: number;
  username: string;
  password: string;
  first_name: string;
  source_image: string;
};
