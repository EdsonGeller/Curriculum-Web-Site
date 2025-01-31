import { useEffect, useState } from "react";
import styled from "styled-components";

interface Section {
    id: string,
    label: string
}

const sections: Section[] = [
    { id: "section1", label: "Inicio" },
    { id: "section2", label: "Sobre mim" },
    { id: "section3", label: "Habilidades" },
    { id: "section4", label: "Carreira" },
    // { id: "section5", label: "Recomendações" },
    { id: "section6", label: "Contato" },
];

const GuideBar = () => {
    const [currentSection, setCurrentSection] = useState<string>('')



    const handleClick = (id: string) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight /2;
            sections.forEach((section) => {
                const element = document.getElementById(section.id);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition <= offsetTop + offsetHeight) {
                        setCurrentSection(section.id)
                    }
                }
            });
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <>
        <Container>
            {sections.map((section) => (
                <NavSection
                    key={section.id}
                    isActive={currentSection === section.id}
                    onClick={() => handleClick(section.id)}
                >
                    {section.label}
                </NavSection>
            ))}
        </Container>
        </>
    );
};

export default GuideBar;

const Container = styled.nav`
  position: fixed;
  top: 5dvh;
  left: 50dvw;
  transform: translate(-50%);
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: center;
  align-items: center;
  width: 90dvw;
  max-width: 90dvw;
  height: 70px;
  border-radius: 40px;
  background-color: rgba(1, 46, 64, 0.9);
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.5);
  z-index: 99999;

  @media (max-width: 768px) {
    top: 2.5%;
    width: 90dvw;
    height: 50px;
    gap: 10px;
  }

  @media (max-width: 480px) {
    position: fixed;
    top: 2dvh;
    gap: 5px;
    left: 50dvw;
    height: auto;
    width: 90dvw;
    padding: 10px;
    }
`;

const NavSection = styled.button<{ isActive: boolean }>`
  background: none;
  border: none;
  color: ${({ isActive }) => (isActive ? "#02735E" : "rgba(255, 255, 255, 0.7)")};
  font-size: 16px;
  white-space: nowrap;
  cursor: pointer;
  text-align: center;
  padding: 5px 10px;
  transition: color 0.3s;

  &:hover {
    color: #02735E;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 5px 8px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    padding: 5px;
    white-space: normal;
  }
`;