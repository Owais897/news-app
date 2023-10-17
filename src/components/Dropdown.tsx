import React from "react";
import { MenuItem } from "@mui/material";
import TextField from "@mui/material/TextField";

interface DropdownProps {
  label: string;
  options: string[] | Option[];
  selectedValue: string;
  onChange: (newValue: string) => void;
}
interface Option {
  label: string;
  value: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  label,
  options,
  selectedValue,
  onChange,
}) => {
  const isStringArray = typeof options[0] === "string";

  return (
    <TextField
      id="outlined-select-currency"
      select
      label={label}
      value={selectedValue}
      onChange={(e) => onChange(e.target.value as string)}
    >
      {isStringArray
        ? (options as string[]).map((option, index) => (
            <MenuItem key={index} value={option}>
              {option}
            </MenuItem>
          ))
        : (options as Option[]).map((option, index) => (
            <MenuItem key={index} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
    </TextField>
  );
};

export default Dropdown;
