import React from "react";
import { useQuery } from "@tanstack/react-query";
import useFetch from "./useFetch";
import { mainUrl } from "../http/api";

interface TodoDetailData {
  title: string;
  content: string;
  id: string;
  createdAt: string;
  updatedAt: string;
}

interface TodoDetailVariable {
  id: string;
}

const useGetTodoDetail = ({ id }: TodoDetailVariable) => {
  const { getData } = useFetch<unknown, TodoDetailData>(mainUrl.baseUrl);

  return useQuery<TodoDetailData, Error>(["todo", id], () =>
    getData(`/todos/${id}`)
  );
};

export default useGetTodoDetail;
