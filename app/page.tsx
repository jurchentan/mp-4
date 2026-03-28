"use client";

import styled from "styled-components";
import {useState} from "react";
import Link from "next/link";

const StyledDiv=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default function Home() {

    const [search, setSearch] = useState("");

    return (
        <StyledDiv>
            <h1>Harvard Art Museums Explorer</h1>
            <p>Search for artworks from the Harvard Art Museums collection</p>
            <input type="text" value={search} placeholder="Search artworks..." onChange={(e) => setSearch(e.target.value)}/>
            <Link href={`/art/${search}`}>Search</Link>
        </StyledDiv>
    );
}
