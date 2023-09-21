import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import {Routes, Route, Navigate} from 'react-router-dom';
import Greeting from "./pages/greeting/Greeting";
import HyphothesisOne from "./pages/hypothesisOne/HypothesisOne";
import HyphothesisTwo from "./pages/hypothesisTwo/HypothesisTwo";
import Results from "./pages/results/Results";
import { GREETING_ROUTE, HYPHOTHESIS_ONE_ROUTE, HYPHOTHESIS_TWO_ROUTE, RESULTS_ROUTE } from "./utils/consts";


function App() {
  const {username, setUsername} = useState('');
  const {groupNumber, setGroupNumber} = useState('');
  const {resultFirst, setResultFirst} = useState('');
  const {resultSecond, setResultSecond} = useState('');

  return (
    <BrowserRouter>
      <Routes>
        <Route path={GREETING_ROUTE} element={<Greeting setUsername={setUsername} setGroupNumber={setGroupNumber}/>} />
        <Route path={HYPHOTHESIS_ONE_ROUTE} element={<HyphothesisOne setResultFirst={setResultFirst}/>} />
        <Route path={HYPHOTHESIS_TWO_ROUTE} element={<HyphothesisTwo setResultSecond={setResultSecond}/>} />
        <Route path={RESULTS_ROUTE} element={<Results data={{username, groupNumber, resultFirst, resultSecond}}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
