import styled from "styled-components";

interface CardProps  {
    img: string,
    content:string,
    date: string,
    tags: JSX.Element,
    header: string,
    source: string,
    button: JSX.Element
}

export const StyledCard = styled.div<CardProps>`
    
    
`