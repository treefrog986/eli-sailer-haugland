import './App.css';
import React, { useState } from 'react';
import {Button, Grid }from "@mui/material"
import Homepage from './state-pages/Homepage';
function App() {
  const [state,setState] = useState(<Homepage/>)
  return (
    <div>
    <h1 style={{textAlign:"center"}}>Eli Saier-Haugland</h1>
    <Grid>
      <Grid item xs={12} >
        <Button
        onClick={e=> setState(<Homepage/>)}>
          Homepage
        </Button>
      </Grid>
    </Grid>
    {state}
    </div>
  );
}

export default App;
