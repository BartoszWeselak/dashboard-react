import React, { useState } from "react";
import { useAuth } from "../../hooks/auth-context";

const Login = () => {
  const [username, setUsername] = useState("");
  const { login } = useAuth();

  const handleLogin = () => {
    login(username);
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter username"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
