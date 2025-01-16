import styled from "styled-components";

export const Title = styled.h1 `
    font-size: 45px;
`

export const SubTitle = styled.h2 `
    font-size: 22px;
    color: #02735E;
`

interface ImageProps {
    src: string;
    width?: string;
    height?: string;

}

export const Images = styled.img<ImageProps>`
    width: ${(props) => props.width || 'auto'};
    height: ${(props) => props.height || 'auto'};
    object-fit: cover;
`
