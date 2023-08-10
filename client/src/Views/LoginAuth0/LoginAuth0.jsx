import "./LoginAuth0.css";
import LoginButton from "../../Components/Auth0/LoginButton";
import LogoutButton from "../../Components/Auth0/LogoutButton";
import Profile from "./Profile";
import { useAuth0 } from "@auth0/auth0-react";

function Login() {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <h1>Is Loading</h1>
  }

  return (
    <div className="App">
      {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      <Profile />
    </div>
  );
}

export default Login;
 