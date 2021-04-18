import { AuthContext } from "./AuthProvider";
import { useContext } from "react";

const useAuth = () => useContext(AuthContext);

export default useAuth;
