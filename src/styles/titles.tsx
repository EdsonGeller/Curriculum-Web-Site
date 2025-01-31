import styled from "styled-components";

export const Title = styled.h1`
  font-size: 45px;

  @media (max-width: 768px) {
    font-size: 35px;
  }
  
  @media (max-width: 480px) {
    font-size: 28px;
  }
  
`;
export const SubTitle = styled.h2`
  font-size: 22px;
  color: #02735e;
  
  @media (max-width: 768px) {
    font-size: 18px;
  }
  
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const Content = styled.p`
  font-size: 16px;
  color: #b0b0b0;

`;

interface ImageProps {
  src: string;
  width?: string;
  height?: string;
}

export const Images = styled.img<ImageProps>`
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  object-fit: cover;

    @media (max-width: 768px) {
    width: ${(props) => props.width ? `calc(${props.width} * 0.76)` : "76%"};
    height: ${(props) => props.height ? `calc(${props.height} * 0.76)` : "76%"};
  }

  @media (max-width: 480px) {
    width: ${(props) => props.width ? `calc(${props.width} * 0.76)` : "76%"};
    height: ${(props) => props.height ? `calc(${props.height} * 0.76)` : "76%"};
  }
`;
