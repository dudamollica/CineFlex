import React from "react"
import styled from "styled-components"

export default function Seat(props) {
    const { id, isAvailable, name, seatsList, setSeatsList} = props
    const [selected, setSelected] = React.useState(false)

    function selectedSeat(seatID) {
        if (isAvailable) {
            if (!selected) {
                setSelected(true)
                const newList = [...seatsList, seatID]
                setSeatsList(newList)
            } else {
                setSelected(false)
            }
        } else {
            alert("Esse assento não está disponível")
        }

    }

    return (
        <SeatStyle isAvailable={isAvailable} onClick={()=>selectedSeat(id)} selected={selected}>
            {name}
        </SeatStyle>)
}

const SeatStyle = styled.div`
width: 26px;
height: 26px;
background: ${props => {
        if (props.selected) {
            return "#1AAE9E"
        }
        if (props.isAvailable) {
            return "#C3CFD9"
        }
        else {
            return "#FBE192"
        }
    }}; 
border: 1px solid;
border-color: ${props => {
        if (props.selected) {
            return "#0E7D71"
        }
        if (props.isAvailable) {
            return "#7B8B99"
        }
        else {
            return "#F7C52B"
        }
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