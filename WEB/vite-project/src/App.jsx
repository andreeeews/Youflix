import { Navigate, Route, Routes } from "react-router-dom";
import { Authenticated, Unauthenticated } from "./components/authenticated";
import Home from "./pages/home/home";
import LoginPage from "./pages/login/login";
import SignupPage from "./pages/register/register";
import List from "./pages/series/list";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <Unauthenticated>
                <Home />
              </Unauthenticated>
            }
          />
          <Route
            path="/login"
            element={
              <Unauthenticated>
                <LoginPage />
              </Unauthenticated>
            }
          />
          <Route
            path="/register"
            element={
              <Unauthenticated>
                <SignupPage />
              </Unauthenticated>
            }
          />
          <Route
            path="/home"
            element={
              <Authenticated>
                <List />
              </Authenticated>
            }
          />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
