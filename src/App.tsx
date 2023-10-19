import { useState } from "react";
import "./App.css";
import NewsApp from "./components/NewsApp";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { PaletteMode } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

import ThemeSwitch from "./components/ThemeSwitch";

import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import { useTranslation } from "react-i18next";
import "./utils/i18n";
import Lang from "./utils/i18n";

// Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

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
    <CacheProvider value={cacheRtl}>
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
    </CacheProvider>
  );
}

export default App;
