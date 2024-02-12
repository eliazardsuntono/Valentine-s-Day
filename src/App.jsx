import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FirstQuestion from "./FirstQuestion";
import FirstYes from './FirstYes';
import FirstNo from './FirstNo';

function App(){
  return (
    <>
      <FirstQuestion />
      <Router>
        <Routes>
          <Route path="/" exact component={FirstYes} />
          <Route path='/' component={FirstNo} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
