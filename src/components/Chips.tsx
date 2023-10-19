import React from "react";
import { Chip } from "@mui/material";
import { useTranslation } from "react-i18next";

function Chips({ onSearch, query }: { onSearch: any; query: string }) {
  const { t } = useTranslation();

  const test: string[] = t("chips:value", { returnObjects: true });
  console.log("test: ", test);

  return (
    <div>
      {test.map((chip) => (
        <Chip
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
