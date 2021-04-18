import React from "react";
import fakeAuth from "./fakeAuth";

export interface LoginInfo {
  isLoggedIn: boolean;
  userName?: string;
}

// useState implementation
export const useLogin = (initial: LoginInfo) =>
  React.useState<LoginInfo>(initial);
export type LoginType = ReturnType<typeof useLogin>[0];
export type SetLoginType = ReturnType<typeof useLogin>[1];

export interface IUseAuthProvider {
  signIn: (cb: () => void) => void;
  signOut: (cb: () => void) => void;
  loginInfo: LoginInfo;
}

const useAuthProvider = (): IUseAuthProvider => {
  const [loginInfo, setLoginInfo] = useLogin({ isLoggedIn: false });

  const signIn = (cb: () => void) => {
    fakeAuth.signIn(() => {
      setLoginInfo({ isLoggedIn: true, userName: "John Doe" });
    });
  };

  const signOut = (cb: () => void) => {
    fakeAuth.signIn(() => {
      setLoginInfo({ isLoggedIn: false });
    });
  };

  return { loginInfo, signIn, signOut };
};

export default useAuthProvider;
