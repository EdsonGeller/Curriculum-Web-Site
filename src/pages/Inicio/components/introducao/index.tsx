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
            <S.Images src={gitHub} width="40px" height="40px"/>
            <S.Images src={linkEdin} width="40px" height="40px"/>
            </Footer>
        </Data>
    );
};

export default Introducao;

const Data = styled.div `

display: flex;
flex-direction: column;
align-items: flex-start;
line-height: 0;
margin-top: 240px;

`

const Footer = styled.footer`
    display: flex;
    flex-direction: row;
`