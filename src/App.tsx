import { useState } from "react";
import "./App.css";
import NewsApp from "./components/NewsApp";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { PaletteMode } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

import ThemeSwitch from "./components/ThemeSwitch";

function App() {
  const [theme, setTheme] = useState<PaletteMode>("light");

  const darkTheme = createTheme({
    palette: {
      mode: theme,
    },
  });

  const [checked, setChecked] = useState(false);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
        <div className="title_container">
          <h1>Multi-lingual News App</h1>
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
