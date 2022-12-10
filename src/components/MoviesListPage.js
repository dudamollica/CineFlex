import axios from "axios";
import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"

export default function MoviesList() {
    const [movies, setMovies] = React.useState([])

    useEffect(() => {
        const URL = "https://mock-api.driven.com.br/api/v8/cineflex/movies"
        const promise = axios.get(URL)
        promise.then(res => setMovies(res.data))
    }, [])

    return (
        <>
            <Text>Selecione o filme</Text>
            <PosterContainer>
                {movies.map((m) => (
                    <Link key={m.id} to={`/sessoes/${m.id}`}>
                        <Poster>
                            <img src={m.posterURL} alt={m.title} />
                        </Poster>
                    </Link>
                ))}
            </PosterContainer>
        </>
    )
}

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
const PosterContainer = styled.div`
display: flex;
flex-wrap: wrap;
gap:30px;
margin-left: 25px;
`

const Poster = styled.div`
box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
border-radius: 3px;
width: 145px;
height: 209px;
display: flex;
align-items: center;
justify-content: center;
img{
    width: 129px;
    height: 193px;
}
&:hover{
    cursor: pointer;
}
`