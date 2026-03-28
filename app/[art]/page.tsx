"use client";

import {useParams} from "next/navigation";
import useSWR from "swr";
import ArtworkCard from "../components/artworkCard";
import styled from "styled-components";
import {Artwork} from "@/app/interfaces/artwork";

const ArtworkContentWrapper = styled.main`
    width: 80vw;
    margin: auto;
    background-color: #f0f0f0;
`;

const SearchTitle = styled.h1`
    color: #333;
`;

const ArtworkCardsContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    border: 2px solid #ccc;
`;

export default function SearchPage() {

    const params = useParams();

    const {data, error} = useSWR(`/api/searchArt?search=${params.art}`,
        (url) =>
            fetch(url)
                .then((res) => res.json())
    );

    if (error) return <div>error</div>;
    if (!data) return <div>Loading...</div>;

    if (data.error) return <div>error</div>;

    const records = data?.records || [];

    if (records.length === 0) return <div>No results found for &quot;{params.art}&quot;</div>;

    return (
        <ArtworkContentWrapper>
            <SearchTitle>Results for: {params.art}</SearchTitle>
            <ArtworkCardsContainer>
                {
                    records.map((artwork: Artwork, i: number) =>
                        (
                            <ArtworkCard
                                key={i}
                                primaryimageurl={artwork.primaryimageurl}
                                title={artwork.title}
                                dated={artwork.dated}
                                culture={artwork.culture}
                            />
                        )
                    )
                }
            </ArtworkCardsContainer>
        </ArtworkContentWrapper>
    );
}
