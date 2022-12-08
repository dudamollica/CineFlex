import styled from "styled-components";
import MoviesList from "./components/MoviesList";
import GlobalStyle from "./GlobalStyle";


function App() {
  return (
    <>
    <GlobalStyle/>
    <LogoStyle>CINEFLEX</LogoStyle>
    <MoviesList/>
    </>
  );
}

export default App;

const LogoStyle = styled.div`
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