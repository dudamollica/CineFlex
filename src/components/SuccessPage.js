import styled from "styled-components"
import { Link } from "react-router-dom"

export default function Success(props) {
    const { name, cpf, seatsNumbers, date, movie, hour, setName, setCpf, setSeatsNumbers, setSeatsList} = props

    function reset(){
        setName("")
        setCpf("")
        setSeatsNumbers([])
        setSeatsList([])
    }

    return (
        <SuccessStyle>
            <TitleSucess>Pedido feito com sucesso!</TitleSucess>

            <MovieSessionStyle data-test="movie-info">
                <h2>Filme e sessão</h2>
                <span>{movie.title}</span>
                <span>{date} - {hour}</span>
            </MovieSessionStyle>

            <MovieSessionStyle data-test="seats-info">
                <h2>Ingressos</h2>
                {seatsNumbers.map((s) =>
                    <span>Assento {s}</span>)}
            </MovieSessionStyle>

            <MovieSessionStyle data-test="client-info">
                <h2>Comprador</h2>
                <span>Nome: {name}</span>
                <span>CPF: {cpf}</span>
            </MovieSessionStyle>

            <ButtonHomeStyle>
                <Link to="/"> <button onClick={reset} data-test="go-home-btn">Voltar para Home</button> </Link>
            </ButtonHomeStyle>

        </SuccessStyle>
    )
}

const ButtonHomeStyle = styled.div`
width:100%;
display:flex;
align-items: center;
justify-content: center;
button{
    background: #E8833A;
    border-radius: 3px;
    border-color:#E8833A;
    width: 225px;
    height: 42px;
    font-weight: 400;
    font-size: 18px;
    color: #FFFFFF;
}
`

const MovieSessionStyle = styled.div`
width:274px;
margin-left:28px;
display:flex;
flex-direction: column;
margin-bottom: 20px;
h2{
    font-weight: 700;
    font-size: 24px;
    color: #293845;
    margin-bottom: 10px;
}
span{
    font-weight: 400;
    font-size: 22px;
    line-height: 26px;
    color: #293845;
}
`

const TitleSucess = styled.div`
width:100%;
display: flex;
align-items: center;
justify-content: center;
height: 110px;
color: #247A6B;
font-weight: 700;
font-size: 24px;
`

const SuccessStyle = styled.div`
margin-top: 70px;
`