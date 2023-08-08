import { Pagination as MuiPagination } from "@mui/material";
import React, { useContext, useEffect } from "react";

import { useSearchParams } from "react-router-dom";
import { LIMIT } from "../../../utils/consts";
import { usersContextType } from "../../contexts/UsersContext/types";
import { usersContext } from "../../contexts/UsersContext/UsersContext";
import axios from "axios";

const Pagination = ({ gender }: { gender: string }) => {
  const { page, setPage, getUsers, pageTotalCount, getTotalPageCount } =
    useContext(usersContext) as usersContextType;

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const currentParams = Object.fromEntries([...searchParams]);
    setSearchParams({
      ...currentParams,
      _page: page.toString(),
      _limit: LIMIT.toString(),
    });
    getUsers(gender);
  }, [page]);
  return (
    <MuiPagination
      count={pageTotalCount}
      page={page}
      color="primary"
      onChange={(_, value) => setPage(value)}
    />
  );
};

export default Pagination;
