import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import TextField from "@mui/material/TextField";

interface DropdownProps {
  label: string;
  options: string[];
  selectedValue: string;
  onChange: (newValue: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  label,
  options,
  selectedValue,
  onChange,
}) => {
  return (
    <TextField
      id="outlined-select-currency"
      select
      label={label}
      defaultValue={options[0]}
      onChange={(e) => onChange(e.target.value as string)}
    >
      {options.map((option) => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default Dropdown;
