import styled from "styled-components"
import axios from "axios"
import React, { useEffect } from "react"
import { Link, useParams } from "react-router-dom"

export default function Seats() {
    const [seatsMovie, setSeatsMovie] = React.useState([])
    const { sessionID } = useParams()


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
                {seatsMovie.map((s) =>
                    <Seat key={s.id} isAvailable={s.isAvailable} name={s.name} />)}
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

function Seat(props) {
    const { isAvailable, name } = props
    const [selected, setSelected] = React.useState(false)

    function selectedSeat(){
        if(isAvailable){
        if(!selected){
        setSelected(true)
    } else {
        setSelected(false)
    }
    } else {
        alert("Esse assento não está disponível")
    }

}

    return (
        <SeatStyle isAvailable={isAvailable} onClick={selectedSeat} selected={selected}>
            {name}
        </SeatStyle>)
}

const ColorKeys = styled.div`
display: flex;
width: 100%;
justify-content: center;
gap:60px;
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

const SeatStyle = styled.div`
width: 26px;
height: 26px;
background: ${props => { 
    if (props.selected){
     return "#1AAE9E" 
    }
    if (props.isAvailable){
        return "#C3CFD9"
     }
     else {
     return "#FBE192"}
    }}; 
border: 1px solid;
border-color: ${props => {
    if (props.selected){
     return "#0E7D71" 
    }
    if (props.isAvailable){
        return "#7B8B99"
     }
     else {
     return "#F7C52B"}
    }}  ;
border-radius: 12px;
margin-left: 20px;
margin-bottom: 34px;
display: flex;
align-items: center;
justify-content: center;
&:hover{
    cursor: pointer;
}
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