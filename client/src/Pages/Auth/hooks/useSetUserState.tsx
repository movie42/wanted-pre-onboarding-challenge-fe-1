import { useSetRecoilState } from "recoil";
import { userState } from "@/lib/atoms";

const useSetUserState = () => {
  const setUserState = useSetRecoilState(userState);

  const setLocalStorage = (token: string) => {
    const userState = {
      isLogin: true,
      token
    };
    localStorage.setItem("justdoit", JSON.stringify(userState));
  };

  return { setLocalStorage, setUserState };
};

export default useSetUserState;
