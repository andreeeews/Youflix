/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom"
import { useAuthContext } from "../contexts/auth-context";

export function Authenticated({ children }) {
  const { user } = useAuthContext();

  if (!user) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
}

export function Unauthenticated({ children }) {
  const { user } = useAuthContext()

  if(user) {
    return <Navigate to="/home" />
  } else {
    return children;
  }
}