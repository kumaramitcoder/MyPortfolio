import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme"; // Ensure this file exports a valid MUI theme
import CssBaseline from "@mui/material/CssBaseline";

import { useSelector, useDispatch } from "react-redux";
import { toggleTheme, selectThemeMode } from "./theme/themeSlice";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Portofolio from "./pages/Portofolio";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import Github from "./pages/Github";
import Resume from "./pages/Resume";
import More from "./pages/More";


function App() {
  
  const themeMode = useSelector(selectThemeMode);
  return (
    <ThemeProvider theme={() => theme(themeMode)}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/portofolio">
              <Route index element={<Portofolio />} />
              <Route path="more" element={<More />} />
            </Route>
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/github" element={<Github />} />
            <Route path="/resume" element={<Resume />} />

            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
