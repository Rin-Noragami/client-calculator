import './App.css';
import Navbar from './components/Navbar';
import FormUser from './components/FormUser';

import React, { useState } from "react";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import SliderSelect from "./components/SliderSelect";
import SocialSelect from "./components/SocialSelect";
import WifiSelect from "./components/WifiSelect";
import Result from "./components/Result";

function App() {
  // хранит данные значений и их изменения
  const [data, setData] = useState({
    minutes: 300,
    sms: 150,
    Internet: 300,
    wifi: 0,
    social: 0,
  })
  return (
  <div className="App">
  <div className="Content">
  <Navbar />
  <Container sx={{marginTop:4}}>
    <Grid container spacing={5} alignItems="center">
      <Grid item>
        <FormUser />
        <SliderSelect data={data} setData={setData}/>
        <WifiSelect data={data} setData={setData}/>
        <SocialSelect data={data} setData={setData}/>
        <Result data={data}/>
      </Grid>
    </Grid>
  </Container>
  </div>
  </div>
  );
}

export default App;
