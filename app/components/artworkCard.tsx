"use client";

import styled from "styled-components";
import {Artwork} from "@/app/interfaces/artwork";

const ArtworkCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
    border: 1px solid black;
    margin: 1rem;
    width: 300px;
    border-radius: 10px;
`;

export default function ArtworkCard(props:Artwork){
    return(
        <ArtworkCardWrapper className="artwork-card">
            <img src={props.primaryimageurl} alt={props.title} style={{width: '100%', height: '200px', objectFit: 'cover'}}/>
            <h2>{props.title}</h2>
            <p>{props.dated}</p>
            <p>{props.culture}</p>
        </ArtworkCardWrapper>
    )
}
