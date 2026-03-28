"use client";

import styled from "styled-components";
import {useState} from "react";
import {useRouter} from "next/navigation";

const StyledDiv=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default function Home() {

    const [search, setSearch] = useState("");
    const router = useRouter();

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (search.trim()) {
            router.push(`/${search}`);
        }
    };

    return (
        <StyledDiv>
            <h1>Harvard Art Museums Explorer</h1>
            <p>Search for artworks from the Harvard Art Museums collection</p>
            <form onSubmit={handleSearch}>
                <input type="text" value={search} placeholder="Search artworks..." onChange={(e) => setSearch(e.target.value)}/>
                <button type="submit">Search</button>
            </form>
        </StyledDiv>
    );
}
