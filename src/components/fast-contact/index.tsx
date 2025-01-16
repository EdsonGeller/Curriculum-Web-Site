import styled from "styled-components";
import * as S from "../../styles/titles"
import dowload from "../../assets/images/material-symbols--download.png";
import whatsApp from "../../assets/images/ic--baseline-whatsapp.png";
const FastContact = () => {
    return (
        <Container>
            <Span border={false}>
                <Nav
                    href="curriculum-project\public\Perfil Edson Geller.pdf"
                    download={"Edson Geller CV"}
                    onClick={() => console.log("está clicando")}
                >
                <S.Images src={dowload} width="20px" height="20px" />
                Baixar CV
                </Nav>
            </Span>
            <Span border={true}>
                <Nav 
                href="https://api.whatsapp.com/send?1=pt_BR&phone=5551999849799"
                target="_blank"
                >
                <S.Images src={whatsApp} width="20px" height="20px" />
                Vamos conversar
                </Nav>
            </Span>

        </Container>
    );
};

export default FastContact;

const Container = styled.div`
    position: fixed;
    bottom: 75px;
    right: 30px;
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 10px;


`

const Span = styled.span<{border: boolean}>`
    display: flex;
    flex-direction: row;
    gap: 10px;
    font-size: 20px;
    color: #02735E;
    cursor: pointer;
  ${(props) =>
        props.border
            ? `
        border: 2px solid #038C65;
        border-radius: 20px;
        padding: 10px;
      `
            : `
        border: none;
      `};

`

const Nav = styled.a`
    text-decoration: none;
    color: inherit;
`