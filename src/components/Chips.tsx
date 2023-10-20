import React from "react";
import { Chip } from "@mui/material";
import { useTranslation } from "react-i18next";

function Chips({ onSearch, query }: { onSearch: any; query: string }) {
  const { t } = useTranslation();

  const chips: string[] = t("chips:value", { returnObjects: true });

  return (
    <div>
      {chips.map((chip) => (
        <Chip
          key={chip}
          label={chip}
          color={query === chip ? "success" : "default"}
          onClick={() => {
            onSearch(chip);
          }}
          sx={{
            margin: "10px",
          }}
        />
      ))}
    </div>
  );
}

export default Chips;
