import styled from "styled-components"
import axios from "axios"
import React, { useEffect } from "react"
import { Link, useParams } from "react-router-dom"

export default function Seats() {
    const [seatsMovie, setSeatsMovie] = React.useState([])
    const {sessionID} = useParams()

    useEffect(() => {
        const URL = `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${sessionID}/seats`
        const promise = axios.get(URL)
        promise.then(res => setSeatsMovie(res.data.seats))
        // promise.then(res => setMoviesDays(res.data.days))
    }, [])

    return (
        <>
            <Text>Selecione o(s) assento(s)</Text>
            <SeatsContainer>
                {seatsMovie.map((s) => <SeatStyle key={s.id} isAvailable={s.isAvailable} >
                    {s.name} </SeatStyle>)}
            </SeatsContainer>
            <ColorKeys>
                <div>
                    <ColorKey background="#1AAE9E" border="#0E7D71" />
                    Selecionado
                </div>
                <div>
                    <ColorKey background="#C3CFD9" border="#7B8B99" />
                    Disponível
                </div>
                <div>
                    <ColorKey background="#FBE192" border="#F7C52B" />
                    Indisponível
                </div>
            </ColorKeys>
        </>
    )
}

const ColorKeys = styled.div`
display: flex;
width: 100%;
justify-content: center;
gap:70px;
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
`

const SeatStyle = styled.div`
width: 26px;
height: 26px;
background: ${props => props.isAvailable ? "#C3CFD9" : "#FBE192"};
border: 1px solid;
border-color: ${props => props.isAvailable ? "#808F9D" : "#F7C52B"};
border-radius: 12px;
margin-left: 20px;
margin-bottom: 34px;
display: flex;
align-items: center;
justify-content: center;
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