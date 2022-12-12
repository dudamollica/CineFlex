import styled from "styled-components"
import axios from "axios"
import React, { useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import Footer from "./Footer"

export default function Sessions() {
    const [movieSessions, setMovieSessions] = React.useState([])
    const [moviesDays, setMoviesDays] = React.useState([])
    const { movieID } = useParams()


    useEffect(() => {
        const URL = `https://mock-api.driven.com.br/api/v8/cineflex/movies/${movieID}/showtimes`
        const promise = axios.get(URL)
        promise.then(res => setMovieSessions(res.data))
        promise.then(res => setMoviesDays(res.data.days))
    }, [])

    return (
        <>
            <Text>Selecione o horário</Text>
            <DaysContainer>
                {moviesDays.map((s) =>
                    <Day data-test="movie-day" key={s.id}>{s.weekday} - {s.date}
                        <div>
                            {s.showtimes.map((times) =>
                                    <Link data-test="showtime" key={times.id} to={`/assentos/${times.id}`}>
                                        <Time>{times.name}</Time>
                                    </Link>)}
                        </div>
                    </Day>)}

            </DaysContainer>
            <Footer img={movieSessions.posterURL} title={movieSessions.title} />
        </>
    )
}

const DaysContainer = styled.div`
margin-bottom: 125px;
a{
text-decoration: none;
color:#293845;
font-weight: 400;
font-size: 20px;
}
`

const Time = styled.button`
background: #E8833A;
border-radius: 3px;
border-color:#E8833A;
width: 83px;
height: 43px;
color: #FFFFFF;
font-size: 18px;
justify-content: center;
align-items: center;
margin-top: 22px;
&:hover{
    cursor: pointer;
}
`

const Day = styled.div`
margin-left: 24px;
margin-bottom: 28px;
div{
    display: flex;
    gap:8px;
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