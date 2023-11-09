import { Navigate, Route, Routes } from "react-router-dom";
import { Authenticated, Unauthenticated } from "./components/authenticated";
import Home from "./pages/home/home";



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
        </Routes>
      </div>

    </>
  )
}

export default App
