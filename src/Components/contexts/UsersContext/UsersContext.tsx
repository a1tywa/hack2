import React, {
  ReactNode,
  createContext,
  FC,
  useReducer,
  useState,
} from "react";
import { API, LIMIT } from "../../../utils/consts";
import axios from "axios";
import { allActionType, initSateType, user, usersContextType } from "./types";
import { useSearchParams } from "react-router-dom";

export const usersContext = createContext<usersContextType | null>(null);

type usersContextProps = {
  children: ReactNode;
};

const initState: initSateType = {
  users: [],
  user: null,
  pageTotalCount: 1,
};
const reducer = (state: initSateType, action: allActionType) => {
  switch (action.type) {
    case "users":
      return { ...state, users: action.payload };
    case "user":
      return { ...state, user: action.payload };
    case "pageTotalCount":
      return { ...state, pageTotalCount: action.payload };
    default:
      return state;
  }
};

const UsersContext: FC<usersContextProps> = ({ children }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [state, dispatch] = useReducer(reducer, initState);
  const [page, setPage] = useState<number>(
    +(searchParams.get("_page") as string) || 1
  );

  const getTotalPageCount = async () => {
    const { data, headers } = await axios.get<user[]>(`${API}`);
    const count = Math.ceil(data.length / LIMIT);
    dispatch({
      type: "pageTotalCount",
      payload: count,
    });
  };

  const getFilteredUsers = async ({ gender }: { gender: string }) => {
    let { data, headers } = await axios.get<user[]>(`${API}`);
    const users = data.filter((obj: user) => obj.gender === gender);
    dispatch({
      type: "users",
      payload: [...users],
    });
  };

  const getUsers = async (gender?: string) => {
    try {
      let search = window.location.search;
      if (gender && gender !== "all") {
        search += `&gender=${gender}`;
      }
      const { data, headers } = await axios.get<user[]>(`${API}${search}`);
      const countPage = headers["x-total-count"] ?? 0;
      dispatch({
        type: "users",
        payload: data,
      });
      dispatch({
        type: "pageTotalCount",
        payload: Math.ceil(countPage / LIMIT),
      });
      // console.log(state);
    } catch (error) {
      console.log(error, "error getUsers");
    }
  };
  //функция для удаления юзера
  const deleteUser = async (id: number) => {
    await axios.delete(`${API}/${id}`);
    getUsers();
  };

  const value = {
    users: state.users,
    user: state.user,
    getUsers,
    page,
    pageTotalCount: state.pageTotalCount,
    setPage,
    getTotalPageCount,
    getFilteredUsers,
  };
  return (
    <usersContext.Provider value={value}>{children}</usersContext.Provider>
  );
};

export default UsersContext;
export { reducer, initState };
