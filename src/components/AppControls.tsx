import React from "react";
import Dropdown from "./Dropdown";
import ThemeSwitch from "./ThemeSwitch";
import Lang from "../utils/i18n";
import { useTranslation } from "react-i18next";
import { PaletteMode } from "@mui/material";
import { THEME_STORAGE_KEY } from "../const";

function AppControls({ setChecked, checked }: any) {
  const {
    t,
    i18n: { language: lang },
  } = useTranslation();

  return (
    <div className="dropdowns_container">
      <Dropdown
        selectedValue={lang}
        onChange={(langId: string) => {
          Lang.set(langId);
        }}
        label={t("dropdown:label")} //"Language"
        options={Object.keys(Lang.langs).map((lang) => ({
          label: Lang.langs[lang].title,
          value: lang,
        }))}
      />

      <ThemeSwitch
        onChange={(newValue) => {
          setChecked(newValue.target.checked);
          localStorage.setItem(
            THEME_STORAGE_KEY,
            newValue.target.checked ? "dark" : ("light" as PaletteMode)
          );
        }}
        checked={checked}
        sx={{ m: 1 }}
      />
    </div>
  );
}

export default AppControls;
