import React from "react";
import { BrowserRouter } from "react-router-dom";
import UsersContext from "./Components/contexts/UsersContext/UsersContext";
import AppRoutes from "./Routers";

function App() {
  return (
    <BrowserRouter>
      <UsersContext>
        <AppRoutes />
      </UsersContext>
    </BrowserRouter>
  );
}

export default App;
