import styled from "styled-components"
import axios from "axios"
import React, { useEffect } from "react"
import { Link, useParams} from "react-router-dom"

export default function Sessions() {
    const [movieSessions, setMovieSessions] = React.useState([])
    const [moviesDays, setMoviesDays] = React.useState([])
    const {movieID} = useParams()
    

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
                {moviesDays.map((s) => <Day key={s.id}>{s.weekday} - {s.date}
                    <div>
                        {s.showtimes.map((times) =>
                            <Link key={times.id} to={`/assentos/${times.id}`}>
                                <Time> {times.name} </Time>
                            </Link>)}

                    </div> </Day>)}

            </DaysContainer>
            <Movie>
                <div><img src={movieSessions.posterURL} /></div>
                {movieSessions.title}
            </Movie>
        </>
    )
}

const Movie = styled.div`
position: fixed;
width: 100%;
height: 117px;
left: 0px;
bottom: 0px;
background: #DFE6ED;
border: 1px solid #9EADBA;
display: flex;
align-items: center;
color: #293845;
font-size:26px;
div{
    width: 64px;
    height: 89px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 18px;
    margin-right: 18px;
}
img{
    width: 48px;
    height: 72px;
}
`

const DaysContainer = styled.div`
margin-bottom: 125px;
a{
text-decoration: none;
color:#293845;
font-weight: 400;
font-size: 20px;
}
`

const Time = styled.div`
background: #E8833A;
border-radius: 3px;
width: 83px;
height: 43px;
color: #FFFFFF;
font-size: 18px;
justify-content: center;
align-items: center;
margin-top: 22px;
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