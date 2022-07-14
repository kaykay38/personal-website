import React from 'react';
import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <AppContainer>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  background-color: #1e1e1e;
  min-height: 100vh;
`;
