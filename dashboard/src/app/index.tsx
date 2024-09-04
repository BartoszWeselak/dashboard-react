import SessionComponent from "../features/auth/Session";
import { AuthProvider } from "../hooks/auth-context";
import { AppRouter } from "./router";

const App = () => {
  return <AppRouter />;
};
export default App;
