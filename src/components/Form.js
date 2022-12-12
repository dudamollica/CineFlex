import styled from "styled-components";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import Success from "./SuccessPage"

export default function Form({name, setName, cpf, setCpf, seatsList }) {
    
    const navigate = useNavigate()

    function sendReservation(e) {
        e.preventDefault()
        const reserve = { ids: seatsList, name, cpf }
        const URL = `https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many`
        const promise = axios.post(URL, reserve)
        promise.then(navigate("/sucesso"))
        promise.then(()=><Success name={name}/>)
    }

    return (
        <form onSubmit={sendReservation}>
            <InputStyle>
                <label>Nome do comprador:
                    <input data-test="client-name" type="text" placeholder="Digite seu nome" required
                        value={name} onChange={(e) => setName(e.target.value)}></input>
                </label>
            </InputStyle>
            <InputStyle>
                <label>CPF do comprador:
                    <input data-test="client-cpf" type="regex" placeholder="Digite seu CPF" required
                        value={cpf} onChange={(e) => setCpf(e.target.value)}></input>
                </label>

            </InputStyle>

            <ButtonStyle data-test="book-seat-btn"><input type="submit"></input></ButtonStyle>
        </form>
    )
}

const InputStyle = styled.div`
margin-left:64px;
label{
    margin-bottom: 5px;
    color: #293845;
    font-size: 18px;
    display:flex;
    flex-direction: column;
}
input{
    width: 327px;
    height: 51px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 3px;
    margin-bottom: 7px;
    font-size: 18px;
    padding-left: 10px;
    color: #293845;
}
input::placeholder{
    color: #AFAFAF;
    font-style: italic;
    font-size: 18px;
}
`

const ButtonStyle = styled.div`
margin-top: 57px;
width:100%;
display:flex;
justify-content: center;
input{
width: 225px;
height: 42px;
background: #E8833A;
border-radius: 3px;
border-color: #E8833A;
color: #FFFFFF;
font-weight: 400;
font-size: 18px;
display: flex;
align-items: center;
justify-content: center;
text-align: center;
}
input:hover{
    cursor: pointer;
}`
