import React from "react";
import { Chip } from "@mui/material";

function Chips({
  chips,
  onSearch,
  query,
}: {
  chips: string[];
  onSearch: any;
  query: string;
}) {
  return (
    <div>
      {chips.map((chip) => (
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
