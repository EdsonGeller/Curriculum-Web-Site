import styled from "styled-components";
import * as S from "../../../../styles/titles";
import gitHub from "../../../../assets/images/mdi--github.png"
import linkEdin from "../../../../assets/images/prime--linkedin.png"
const Introducao = () => {
    return (
        <Data>
            <S.Title>
                Edson Geller
            </S.Title>
            <S.SubTitle>
                Full Stack Developer
            </S.SubTitle>
            <Footer>
                <Nav
                    href="https://github.com/EdsonGeller/Curriculum-Web-Site"
                    target="_blank"
                >
                    <S.Images src={gitHub} width="40px" height="40px" />
                </Nav>
                <Nav href="https://www.linkedin.com/in/edsongeller1505/"
                    target="_blank"
                >
                    <S.Images src={linkEdin} width="40px" height="40px" />
                </Nav>
            </Footer>
        </Data>
    );
};

export default Introducao;

const Data = styled.div`

display: flex;
flex-direction: column;
align-items: flex-start;
line-height: 0;
margin-top: 240px;

    @media (max-width: 768px) {
    margin-top: 100px;
    align-items: center;
  }
  
    @media (max-width: 480px) {
    margin-top: 50px;
    align-items: center;

  }

`

const Footer = styled.footer`
    display: flex;
    flex-direction: row;
`

const Nav = styled.a`
    text-decoration: none;
    cursor: pointer;

`