import React from "react";
import { Chip } from "@mui/material";

function Chips({ chips, onSearch }: { chips: string[]; onSearch: any }) {
  return (
    <div>
      {chips.map((chip) => (
        <Chip label={chip} onClick={() => onSearch(chip) as any} />
      ))}
    </div>
  );
}

export default Chips;
