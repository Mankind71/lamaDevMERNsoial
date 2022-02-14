import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";

export { default as Home} from "./pages/home/Home";
export { default as Login} from "./pages/login/Login";
export { default as Profile} from "./pages/profile/Profile";

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
