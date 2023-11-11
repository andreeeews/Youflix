import { Navigate, Route, Routes } from "react-router-dom";
import { Authenticated, Unauthenticated } from "./components/authenticated";
import Home from "./pages/home/home";
import LoginPage from "./pages/login/login";



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
                <LoginPage/>
              </Unauthenticated>
            }
          />
        </Routes>
      </div>

    </>
  )
}

export default App
