import styled from "styled-components";
import MoviesList from "./components/MoviesListPage";
import GlobalStyle from "./GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Sessions from "./components/SessionsPage"
import Seats from "./components/SeatsPage"


function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />

        <Header>CINEFLEX</Header>

        <Routes>
          <Route path="/" element={<MoviesList />} />
          <Route path="/sessoes/:movieID" element={<Sessions />} />
          <Route path="/assentos/:sessionID" element={<Seats />} />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;

const Header = styled.div`
position: absolute;
width: 100%;
height: 67px;
left: 0px;
top: 0px;
background: #C3CFD9;
color: #E8833A;
font-weight: 400;
font-size: 34px;
display: flex;
align-items: center;
justify-content: center;
`