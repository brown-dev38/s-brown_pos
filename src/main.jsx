import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./components/i18n/i18n.js";
import GlobalStyle from "./components/styled-components/globalStyle/GlobalStyle.js";
import MyThemeProvider from "./components/styled-components/theme/MyThemeProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <React.Suspense fallback="Loading...">
      <MyThemeProvider>
        <GlobalStyle />
        <App />
      </MyThemeProvider>
    </React.Suspense>
  </React.StrictMode>
);
