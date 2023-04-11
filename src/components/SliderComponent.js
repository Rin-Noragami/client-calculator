import React from "react";
import Slider from "@mui/material/Slider";
import { Typography } from "@mui/material";
import { Stack } from "@mui/system";

const SliderComponent = ({
  defaultValue,
  min,
  max,
  label,
  unit,
  onChange,
  amount,
  value,
  steps,
  marks,
  style,
}) => {
  return (
    <Stack my={1.4}>
      <Stack gap={1}>
        <Typography float="left" variant="subtitle2">{label}</Typography>
        <Typography variant="h5">
          {amount}
        </Typography>
      </Stack>
      <Slider
        style={style}
        min={min}
        max={max}
        defaultValue={defaultValue}
        aria-label="Custom marks"
        onChange={onChange}
        value={value}
        marks={marks}
        step={steps}
      />
    </Stack>
  );
};

export default SliderComponent;
