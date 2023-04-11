import React from "react";
import Slider from "@mui/material/Slider";
import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import SliderComponent from "./SliderComponent";

// label - ключевые точки для пользователя
// value - значение данных стоимости тарифа
const marksMinutes = [
  {
    value: 100,
    label: "100",
  },
  {
    value: 200,
    label: "200",
  },
  {
    value: 300,
    label: "300",
  },
  {
    value: 400,
    label: "600",
  },
];

const marksInternet = [
  {
    value: 150,
    label: "5 гб",
  },
  {
    value: 300,
    label: "10",
  },
  {
    value: 450,
    label: "15",
  },
  {
    value: 600,
    label: "25",
  },
];

const marksSms = [
  {
    value: 50,
    label: "0",
  },
  {
    value: 100,
    label: "50",
  },
  {
    value: 150,
    label: "100",
  },
  {
    value: 200,
    label: "150",
  },
];

const SliderSelect = ({ data, setData }) => {
  return (
    <div>
      <SliderComponent
        onChange={(e, value) => {
          setData({
            ...data,
            minutes: value.toFixed(0),
          });
        }}
        style={{ color: "#7A5CFA" }}
        defaultValue={data.minutes}
        min={100}
        max={400}
        steps={10}
        amount={data.homeValue}
        label="Минуты"
        value={data.homeValue}
        aria-label="Custom marks"
        step={10}
        marks={marksMinutes}
      />

      <SliderComponent
        onChange={(e, value) => {
          setData({
            ...data,
            sms: value.toFixed(0),
          });
        }}
        style={{ color: "#7A5CFA" }}
        defaultValue={data.sms}
        min={50}
        max={200}
        steps={10}
        amount={data.homeValue}
        label="Смс"
        value={data.homeValue}
        aria-label="Custom marks"
        step={10}
        marks={marksSms}
      />

      <SliderComponent
        onChange={(e, value) => {
          setData({
            ...data,
            Internet: value.toFixed(0),
          });
        }}
        style={{ color: "#000000" }}
        defaultValue={data.Internet}
        min={150}
        max={600}
        steps={10}
        amount={data.homeValue}
        label="Интернет"
        value={data.homeValue}
        aria-label="Custom marks"
        step={10}
        marks={marksInternet}
      />
    </div>
  );
};

export default SliderSelect;
