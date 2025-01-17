import styled from "styled-components";
import * as S from "../../styles/titles";
import dowload from "../../assets/images/material-symbols--download.png";
import whatsApp from "../../assets/images/ic--baseline-whatsapp.png";
import closeIcon from "../../assets/images/carbon--close-filled.png";
import { useEffect, useRef, useState } from "react";
const FastContact = () => {
  const [isOpen, setIsOpen] = useState(true);
  const lastScrollY = useRef(window.scrollY);
  const accumulatedScroll = useRef(0);
  const SCROLL_THRESHOLD = 300;

  const handleIsopen = () => {
    accumulatedScroll.current = 0;
    lastScrollY.current = window.scrollY;
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!isOpen) return;
      const currentScrollY = window.scrollY;
      const deltaY = Math.abs(currentScrollY - lastScrollY.current);
      accumulatedScroll.current += deltaY;
      lastScrollY.current = currentScrollY;

      if (accumulatedScroll.current > SCROLL_THRESHOLD) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  return (
    <Container>
      <Menu isOpen={isOpen}>
        <S.Images
          id="closeModal"
          src={closeIcon}
          width="20px"
          height="20px"
          onClick={handleIsopen}
        />
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
        <Span border={true}>
          <Nav
            href="https://api.whatsapp.com/send?1=pt_BR&phone=5551999849799"
            target="_blank"
          >
            <S.Images src={whatsApp} width="20px" height="20px" />
            <span>Vamos conversar</span>
          </Nav>
        </Span>
      </Menu>
      {!isOpen && (
        <CloseButton
          src={whatsApp}
          width="35px"
          height="35px"
          onClick={handleIsopen}
        />
      )}
    </Container>
  );
};

export default FastContact;

const Container = styled.div`
  position: relative;
`;

const Menu = styled.div<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: rgb(1, 46, 64);
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  cursor: pointer;

  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  transform: translateY(${(props) => (props.isOpen ? "0" : "20px")});
  transition: all 0.3s ease;
  pointer-events: ${(props) => (props.isOpen ? "all" : "none")};

  #closeModal {
    position: absolute;
    top: 10px;
    right: 10px;
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
  text-decoration: none;
  color: #038c65;
  font-size: 16px;

  align-items: center;
  span {
    margin-left: 5px;
  }
`;

const CloseButton = styled(S.Images)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: transparent;
  border: none;
  border-radius: 50%;
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;
