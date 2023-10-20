import { useState } from "react";
import "./App.css";
import NewsApp from "./components/NewsApp";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { PaletteMode } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

import { useTranslation } from "react-i18next";
import "./utils/i18n";
import Lang from "./utils/i18n";

import AppControls from "./components/AppControls";
import { THEME_STORAGE_KEY } from "./const";

function App() {
  const theme = localStorage.getItem(THEME_STORAGE_KEY) || "light";
  const {
    t,
    i18n: { language: lang },
  } = useTranslation();
  const direction = Lang.langs[lang].rtl ? "rtl" : "ltr";

  const darkTheme = createTheme({
    palette: {
      mode: theme as PaletteMode,
    },
    direction,
  });

  const check = darkTheme.palette.mode === "dark";
  const [checked, setChecked] = useState(check);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App" dir={direction}>
        <div className="title_container">
          <h1>{t("mainpage:title")}</h1>
          <AppControls checked={checked} setChecked={setChecked} />
        </div>
        <NewsApp />
      </div>
    </ThemeProvider>
  );
}

export default App;
