import React from "react";
import { useAuth } from "../../hooks/auth-context";
import Login from "./Login";

const SessionComponent = () => {
  const { user, logout } = useAuth();

  return (
    <div>
      {user ? (
        <div>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default SessionComponent;
