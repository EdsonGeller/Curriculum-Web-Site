import styled from "styled-components";
import * as S from "../../styles/titles"
import clipBoardIcon from "../../assets/images/mdi--clipboard-outline.png"
import { useState } from "react";
import dowload from "../../assets/images/material-symbols--download.png";
import whatsApp from "../../assets/images/ic--baseline-whatsapp.png";

const Contato = () => {
    const [isCliped, setIsCliped] = useState(false)
    const copyToClipBoard = () => {
        navigator.clipboard.writeText(email);
        setIsCliped(true)
        
        setTimeout(() => {
            setIsCliped(false);
        }, 2000)
    };

    const email = "edsongellerdiadasrosas@gmail.com ";



    return (
        <Container>
            {isCliped && <Alert>Email copiado para o clipboard!</Alert>}
            <S.Title>Meios de contato</S.Title>
            <EmailWrapper>
                <Email isCliped={isCliped} onClick={() => (window.location.href = `mailto:${email}`)}>
                    {email}
                </Email>
                <S.Images src={clipBoardIcon} width="20px" height="20px" onClick={copyToClipBoard} />
            </EmailWrapper>
            <Span border={true}>
                <Nav
                    href="https://api.whatsapp.com/send?1=pt_BR&phone=5551999849799"
                    target="_blank"
                >
                    <S.Images src={whatsApp} width="20px" height="20px" />
                    <span>Vamos conversar</span>
                </Nav>
            </Span>
            <Span border={false}>
                <Nav
                    href="/Perfil Edson Geller.pdf"
                    download={"Edson Geller CV"}
                    onClick={() => console.log("Download CV clicado")}
                >
                    <S.Images src={dowload} width="20px" height="20px" />
                    <span>Baixar CV</span>
                </Nav>
            </Span>
        </Container>
    );
};

export default Contato;

const Container = styled.section`
    display: flex;
    height: 100vh;
    gap: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
`;

const EmailWrapper = styled.div`
    width: fit-content;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border: 3px solid rgb(2, 115, 94, 0.7);
    border-radius: 10px;

    cursor: pointer;

    img{
        transition: 0.5s;

        &:hover{
            width: 22px;
            height: 22px;
        }
    }
`;

const Email = styled.span<{ isCliped: boolean }>`
    font-size: 18px;
    font-weight: bold;
    color: ${(props) =>
        props.isCliped ? "#02735E" : "#fefefe7b"
    };
    transition: 1s;

    &:hover{
        color: #fefefe;
    }
`;


const Span = styled.div<{ border: boolean }>`
  display: flex;
  border: ${(props) =>
        props.border ? "3px solid rgb(2, 115, 94, 0.7)" : "none"};
  padding: 8px;
  border-radius: 10px;

`;

const Nav = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #038c65;
  font-size: 16px;
  align-items: center;

  transition: 1s;
  span {
    margin-left: 5px;
  }

  &:hover{
    color: #fefefe;
  }
`;

const Alert = styled.div`
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #02735e;
    color: #fff;
    border-radius: 5px;
    font-size: 14px;
    animation: fadeInOut 2s;

    @keyframes fadeInOut {
        0% {
            opacity: 0;
            transform: translateY(-10px);
        }
        10% {
            opacity: 1;
            transform: translateY(0);
        }
        90% {
            opacity: 1;
            transform: translateY(0);
        }
        100% {
            opacity: 0;
            transform: translateY(-10px);
        }
    }
`;