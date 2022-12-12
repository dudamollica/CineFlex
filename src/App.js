import styled from "styled-components";
import MoviesList from "./components/MoviesListPage";
import GlobalStyle from "./GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Sessions from "./components/SessionsPage"
import Seats from "./components/SeatsPage"
import Success from "./components/SuccessPage"
import React from "react";

function App() {
  const [name, setName] = React.useState("")
  const [cpf, setCpf] = React.useState("")
  const [seatsList, setSeatsList] = React.useState("")
  const [date, setDate] = React.useState([])
  const [movie, setMovie] = React.useState([])
  const [hour, setHour] = React.useState([])
  const [seatsNumbers, setSeatsNumbers] = React.useState("")
  // console.log(seatsNumbers)

  return (
    <>
      <BrowserRouter>
        <GlobalStyle />

        <Header>CINEFLEX</Header>

        <Routes>
          <Route path="/" element={<MoviesList />} />
          <Route path="/sessoes/:movieID" element={<Sessions />} />
          <Route path="/assentos/:sessionID" element={
            <Seats
              name={name} setName={setName}
              cpf={cpf} setCpf={setCpf}
              seatsList={seatsList} setSeatsList={setSeatsList}
              date={date} setDate={setDate}
              movie={movie} setMovie={setMovie}
              hour={hour} setHour={setHour} 
              seatsNumbers={seatsNumbers} setSeatsNumbers={setSeatsNumbers} />} />
          <Route path="/sucesso" element={
            <Success
              name={name}
              cpf={cpf}
              seatsNumbers={seatsNumbers}
              date={date}
              movie={movie}
              hour={hour} />} />
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