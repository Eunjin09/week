import React from "react";
import styled from "styled-components";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./Home";
import Detail from "./Detail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Container>
          <Route path='/' exact component={Home} />
          <Route path='/detail/:day' component={Detail} />
        </Container>
      </BrowserRouter>
    </div>
  );
}


// style
const Container = styled.div`
  max-width: 350px;
  min-height: 60vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

export default App;
