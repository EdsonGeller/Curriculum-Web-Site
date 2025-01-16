import Introducao from "./components/introducao";
import * as S from "../../styles/titles"
import avatar from "../../assets/images/avataaars (1).png"
import styled from "styled-components";

const Inicio = () => {
    return (
            <Container>
                <Introducao />
                <Section>
                    <S.Images
                    src={avatar}
                    width="363px"
                    height="385px"
                    />
                </Section>
            </Container>
    );
};

export default Inicio;

const Section = styled.section`
    margin-top: 100px;
    margin-left: 170px;
`
const Container = styled.div`
    display: flex;
    flex-direction: row;
    
    
    
`