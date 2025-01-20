import { styled } from "styled-components";
import * as S from "../../styles/titles";
import selfPic from "../../assets/images/About me.png"

const SobreMim = () => {
  return (
    <Container>
      <S.Images src={selfPic} width="483px" height="490px"/>
      <Section>
        <S.Title>Edson Geller</S.Title>
        <S.Content>
          ♔ Sou apaixonado por desenvolvimento front-end e tenho experiência com
          tecnologias como JavaScript, React.js e TypeScript. Gosto de criar
          interfaces que proporcionem uma excelente experiência para os
          usuários.
        </S.Content>
        <S.Content>
          🧑‍🎓 Estou atualmente no último semestre do curso de Análise e
          Desenvolvimento de Software.
        </S.Content>

        <S.Content>
          ♞ Além do meu interesse em desenvolvimento front-end, também possuo
          experiência em back-end, utilizando Java com Spring Boot.
        </S.Content>

        <S.Content>
          ⛏ Estou sempre em busca de novos conhecimentos e gosto de explorar as
          inovações do mundo da tecnologia.
        </S.Content>
      </Section>
    </Container>
  );
};

export default SobreMim;


const Section = styled.section`
  margin-top: 100px;
  margin-left: auto;
  width: 638px;
  text-align: left;
  line-height: 1;
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  img{
    margin-top: 120px;
  }
  
`;
