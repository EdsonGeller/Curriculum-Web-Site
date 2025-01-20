import styled from "styled-components";
import * as S from "../../styles/titles"
import Profissional from "./components/profissional";
import Academico from "./components/academico";

const Carreira = () => {
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
`

const MidTitle = styled.span`
    margin-top: 100px;
    display: flex;
    justify-content: center;

`