import React from "react";
import { useMutation } from "@tanstack/react-query";
import { useFetch } from "@/lib/hooks";
import { mainUrl } from "@/lib/http";

interface SignupData {
  message: string;
  token: string;
}
interface SignupVariable {
  email: string;
  password: string;
}

const useSignup = () => {
  const { postData } = useFetch<SignupVariable, SignupData>(mainUrl.baseUrl);

  return useMutation<SignupData, Error, SignupVariable, unknown>((body) =>
    postData("/users/create", body)
  );
};

export default useSignup;