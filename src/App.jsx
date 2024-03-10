// import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Sidebar from "./components/sidebar/Sidebar";
import Loading from "./components/styled-components/loading/Loading.js";
import LanguageSelector from "./components/language/LanguageSelector";
import Dashboard from "./components/pages/dashboard/Dashboard.jsx";
import Products from "./components/pages/products/Products.jsx";
import Orders from "./components/pages/orders/Orders.jsx";
import Pos from "./components/pages/pos/Pos.jsx";
import Report from "./components/pages/report/Report.jsx";
import Setting from "./components/pages/setting/Setting.jsx";
// import axios from "axios";

function App() {
  // const [notes, setNotes] = useState(null);
  const { t } = useTranslation();
  // useEffect(() => {
  //   axios.get("https://localhost:4000/server/notes").then((res) => {
  //     console.log(res.data);
  //     setNotegrays(res.data.data);
  //   });
  // }, []);

  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Pos />} />
        <Route path="/products" element={<Products />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/report" element={<Report />} />
        <Route path="/setting" element={<Setting />} />
      </Routes>
      {/* <div>
        <h1 style={{ color: "blue" }}>Notes</h1>
        {notes ? (
          <ul>
            {notes.map((note, index) => (
              <>
                <li key={index}>
                  <h2>{note.title}</h2>
                  <p>{note.content}</p>
                </li>
              </>
            ))}
          </ul>
        ) : (
          <p>Loading...</p>
        )}
      </div> */}
      {/* <LanguageSelector />
      <h1>{t("greeting")}</h1> */}
    </Router>
  );
}

export default App;
