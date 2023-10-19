import { useState } from "react";
import "./App.css";
import NewsApp from "./components/NewsApp";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { PaletteMode } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

import ThemeSwitch from "./components/ThemeSwitch";

import { useTranslation } from "react-i18next";
import "./utils/i18n";
import Lang from "./utils/i18n";

function App() {
  const [theme, setTheme] = useState<PaletteMode>("light");
  const {
    t,
    i18n: { language: lang },
  } = useTranslation();
  const direction = Lang.langs[lang].rtl ? "rtl" : "ltr";

  const darkTheme = createTheme({
    palette: {
      mode: theme,
    },
    direction,
  });

  const [checked, setChecked] = useState(false);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App" dir={direction}>
        <div className="title_container">
          <h1>{t("mainpage:title")}</h1>
          <div>
            <ThemeSwitch
              onChange={(newValue) => {
                setChecked(newValue.target.checked);
                setTheme(
                  newValue.target.checked ? "dark" : ("light" as PaletteMode)
                );
              }}
              checked={checked}
              sx={{ m: 1 }}
            />
          </div>
        </div>
        <NewsApp />
      </div>
    </ThemeProvider>
  );
}

export default App;
