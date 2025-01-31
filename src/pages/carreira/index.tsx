import styled from "styled-components";
import * as S from "../../styles/titles"
import Profissional from "./components/profissional";
import Academico from "./components/academico";
import { useState } from "react";

const Carreira = () => {
    const [showType, setShowType] = useState(true);

    return (
        <>
            <MidTitle>
                <S.Title>Carreira</S.Title>
            </MidTitle>
            <Container>
                <Section>
                    <S.SubTitle>Profissional</S.SubTitle>
                    <Profissional/>
                </Section>
                <Section>
                    <S.SubTitle>Acadêmica</S.SubTitle>
                    <Academico/>
                </Section>
            </Container>
            <MobileContainer>
                <SliderContainer>
                    <SliderOption
                        active={!showType}
                        onClick={() => setShowType(false)}
                    >
                        Acadêmica
                    </SliderOption>
                    <SliderOption
                        active={showType}
                        onClick={() => setShowType(true)}
                    >
                        Profissional
                    </SliderOption>
                </SliderContainer>
                {showType ? (
                    <>
                        <Profissional />
                    </>
                ) : (
                    <>
                        <Academico />
                    </>
                )}
            </MobileContainer>
        </>
    );
};

export default Carreira;

const Section = styled.section`
margin-top: 0px;
`
const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 100px;

    @media (max-width: 768px) {
    display: none;

  }
`

const MidTitle = styled.span`
    margin-top: 100px;
    display: flex;
    justify-content: center;

`

const MobileContainer = styled.div`
    display: none;

    @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 10px;

  }
`


const SliderContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 20px; 
`;

const SliderOption = styled.button<{active: boolean}>`
    background: none;
    border: none;
    color: ${(props) => (props.active ? '#02735E' : 'white')};
    font-size: 16px;
    cursor: pointer;
    padding: 5px 10px;
    transition: color 0.3s ease;

    &:focus {
        outline: none;
    }
`;