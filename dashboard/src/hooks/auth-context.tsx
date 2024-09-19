import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import { Navigate } from "react-router-dom";

interface User {
  username: string;
  email: string;
  password: string;
  avatar?: string | null;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => boolean;
  register: (username: string, email: string, password: string) => boolean;
  logout: () => void;
  change: (
    newUsername: string,
    newEmail: string,
    newPassword: string
  ) => boolean;
  setAvatar: (newAvatar: string | null) => boolean;
  clearAvatar: () => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);
  const login = (email: string, password: string): boolean => {
    const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");
    const existingUser = storedUsers.find(
      (user: User) => user.email === email && user.password === password
    );

    if (existingUser) {
      setUser(existingUser);
      localStorage.setItem("currentUser", JSON.stringify(existingUser));
      return true;
    } else {
      alert("Invalid email or password");
      return false;
    }
  };

  const register = (
    username: string,
    email: string,
    password: string
  ): boolean => {
    const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");
    const existingUser = storedUsers.find((user: User) => user.email === email);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (username.length < 1 || email.length < 1 || password.length < 1) {
      alert("Fill all fields");
      return false;
    } else if (!emailRegex.test(email)) {
      alert("Invalid email");
      return false;
    } else if (!passwordRegex.test(password)) {
      alert(
        "Password must be 8 characters long and contain a least one: lowercase letter, uppercase letter, number, special character(@$%)"
      );
      return false;
    } else if (existingUser) {
      alert("User with this email already exists");
      return false;
    } else {
      const newUser: User = { username, email, password, avatar: null };
      storedUsers.push(newUser);
      localStorage.setItem("users", JSON.stringify(storedUsers));
      setUser(newUser);
      localStorage.setItem("currentUser", JSON.stringify(newUser));
      return true;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("currentUser");
  };

  const change = (
    newUsername?: string,
    newEmail?: string,
    newPassword?: string
  ): boolean => {
    const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");
    const currentUser = JSON.parse(
      localStorage.getItem("currentUser") || "null"
    );

    if (!currentUser) {
      alert("No user is currently logged in.");
      return false;
    }

    if (newEmail && newEmail !== currentUser.email) {
      const emailTaken = storedUsers.some(
        (user: User) => user.email === newEmail
      );

      if (emailTaken) {
        alert("Email is already taken by another user.");
        return false;
      }
    }

    const updatedUser: User = {
      username: newUsername || currentUser.username,
      email: newEmail || currentUser.email,
      password: newPassword || currentUser.password,
    };

    const updatedUsers = storedUsers.map((user: User) =>
      user.email === currentUser.email ? updatedUser : user
    );

    localStorage.setItem("users", JSON.stringify(updatedUsers));
    localStorage.setItem("currentUser", JSON.stringify(updatedUser));

    setUser(updatedUser);

    return true;
  };

  const setAvatar = (newAvatar: string | null): boolean => {
    const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");
    const currentUser = JSON.parse(
      localStorage.getItem("currentUser") || "null"
    );

    if (!currentUser) {
      alert("No user is currently logged in.");
      return false;
    }

    const updatedUser: User = {
      ...currentUser,
      avatar: newAvatar, // Zmieniamy tylko avatar
    };

    const updatedUsers = storedUsers.map((user: User) =>
      user.email === currentUser.email ? updatedUser : user
    );

    localStorage.setItem("users", JSON.stringify(updatedUsers));
    localStorage.setItem("currentUser", JSON.stringify(updatedUser));
    setUser(updatedUser);

    return true;
  };
  const clearAvatar = () => setAvatar(null);

  const value = {
    user,
    login,
    register,
    logout,
    change,
    setAvatar,
    clearAvatar,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};
