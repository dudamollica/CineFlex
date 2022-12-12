import styled from "styled-components"
import axios from "axios"
import React, { useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import Seat from "./Seat"
import Footer from "./Footer"
import Form from "./Form"

export default function Seats(props) {
    const {name, setName, cpf, setCpf, seatsList, setSeatsList, date, setDate, movie, setMovie, hour, setHour, seatsNumbers, setSeatsNumbers}=props
    const [seatsMovie, setSeatsMovie] = React.useState([])
    const { sessionID } = useParams()

    useEffect(() => {
        const URL = `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${sessionID}/seats`
        const promise = axios.get(URL)
        promise.then(res => setSeatsMovie(res.data.seats))
        promise.then(res => setMovie(res.data.movie))
        promise.then(res => setDate(res.data.day.date))
        promise.then(res => setHour(res.data.name))
    }, [])

    return (
        <SeatsPageStyle>
            <Text>Selecione o(s) assento(s)</Text>

            <SeatsContainer>
                {seatsMovie.map((s) => <Seat key={s.id} id={s.id} isAvailable={s.isAvailable} name={s.name}
                    seatsList={seatsList} setSeatsList={setSeatsList} seatsNumbers={seatsNumbers} setSeatsNumbers={setSeatsNumbers}/>)}
            </SeatsContainer>

            <ColorKeys>
                <div><ColorKey background="#1AAE9E" border="#0E7D71" />Selecionado</div>
                <div><ColorKey background="#C3CFD9" border="#7B8B99" />Disponível</div>
                <div><ColorKey background="#FBE192" border="#F7C52B" />Indisponível</div>
            </ColorKeys>

            <Form name={name} setName={setName} cpf={cpf} setCpf={setCpf} seatsList={seatsList}/>

            <Footer img={movie.posterURL} title={movie.title} date={date} hour={hour} />
        </SeatsPageStyle>
    )
}


const SeatsPageStyle = styled.div`
margin-bottom: 150px;
`

const ColorKeys = styled.div`
display: flex;
width: 100%;
justify-content: center;
gap:60px;
margin-bottom: 40px;
div{
    display: flex;
    flex-direction: column;
    align-items: center;
}
`
const ColorKey = styled.div`
width: 25px;
height: 25px;
background: ${props => props.background};
border: 1px solid ${props => props.border};
border-radius: 17px;
margin-bottom: 20px;
`

const SeatsContainer = styled.div`
display: flex;
flex-wrap: wrap;
margin-left: 11px;
width:100%;
`
const Text = styled.div`
margin-top: 67px;
width: 100%;
height: 110px;
font-size: 24px;
font-weight: 400;
color: #293845;
display: flex;
align-items: center;
justify-content: center;
`