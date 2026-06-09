import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from "./context/ThemeContext";
import { CartProvider } from "./context/CartContext";
import { UserProvider } from "./context/UserContext";
import { ToastProvider } from "./context/ToastContext";

import App from "./App";

import "./App.css";
import "./styles/global.css";
import "./styles/navbar.css";
import "./styles/footer.css";
import "./styles/sidebar.css";
import "./styles/toast.css";
import "./styles/theme.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CartProvider>
          <ThemeProvider>
            <ToastProvider>
              <App />
            </ToastProvider>
          </ThemeProvider>
        </CartProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);