import styled from "styled-components";
import * as S from "../../styles/titles";
import Carrossel from "./components/carrossel-images";

const Habilidades = () => {
  return (
    <Container>
      <Section>
        <S.Title>Tecnologias e Habilidades</S.Title>
        <S.Content>Techs que uso no dia a dia</S.Content>
        <Carrossel usage={'daily'}/>
      </Section>
      <Section>
        <S.Content>Techs que possuo entendimento</S.Content>
        <Carrossel usage={'study'}/>
      </Section>
    </Container>
  );
};

export default Habilidades;

const Section = styled.section`
  margin-top: 50px;
`;
const Container = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
