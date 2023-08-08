export type usersContextType = {
  getTotalPageCount: () => void;
  users: user[];
  user: user | null;
  getUsers: (gender?: string) => void;
  page: number;
  pageTotalCount: number;
  setPage: (num: number) => void;
  getFilteredUsers: ({ gender }: { gender: string }) => void;
};

export type user = {
  id: number;
  name: string;
  age: number;
  image: string;
  description: string;
  gender: string;
};

export type initSateType = {
  pageTotalCount: any;
  users: user[];
  user: user | null;
};

type usersActionType = {
  type: "users";
  payload: user[];
};
type pageTotalCountType = {
  type: "pageTotalCount";
  payload: number;
};
type userActionType = {
  type: "user";
  payload: user | null;
};

export type allActionType =
  | usersActionType
  | userActionType
  | pageTotalCountType;
