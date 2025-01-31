import styled from 'styled-components';

const experience = [
    {
        title: 'Desenvolvedor Full-Stack na CompassUol',
        content: 'Desenvolvimento de features para soluções empresariais, bem como a manutenção do código, utilizando ReactJS, TypeScript, JavaScript e Java Spring Boot.',
        startDate: 'Setembro 2024',
        endDate: 'Atualmente',
        timeSpend: '5 meses'
    },
    {
        title: 'Estagiário na 3M-Analitica',
        content: 'Estagiário como analista de dados, responsável por criar interfaces que integrassem a análise de dados e proporcionassem ao usuário uma experiência facilitada na compreensão das informações analisadas.',
        startDate: 'Maio 2024',
        endDate: 'Agosto 2024',
        timeSpend: '3 meses'
    },
    {
        title: 'Estagiário na CompassUol',
        content: 'Introdução ao mercado de trabalho na área de desenvolvimento, com apresentação das metodologias ágeis, bem como do desenvolvimento back-end utilizando Java Spring Boot e AWS.',
        startDate: 'Maio 2023',
        endDate: 'Oct 2023',
        timeSpend: '6 meses'
    },
    {
        title: 'Asp à Oficial do Exército',
        content: 'No ano de 2021, concluí o Núcleo de Preparação de Oficiais da Reserva no 7º Batalhão de Infantaria Blindado, onde desenvolvi habilidades de comunicação, senso de responsabilidade e liderança.',
        startDate: 'Fev 2021',
        endDate: 'Dez 2021',
        timeSpend: '10 meses'
    },
];

interface ExperienceProps {
    title: string;
    content: string;
    startDate: string;
    endDate: string;
    timeSpend: string;
    isFirst?: boolean;
}

function ExperienceCard({ title, content, startDate, endDate, timeSpend, isFirst }: ExperienceProps) {
    return (
        <Card isFirst={isFirst}>
            <Title>{title}</Title>
            <Content>{content}</Content>
            <Footer>
                <Date>
                    {startDate} - {endDate}
                </Date>
                <Date>
                    ({timeSpend})
                </Date>
            </Footer>
        </Card>
    );
}

function Profissional() {
    return (
        <div>
            {experience.map((exp, index) => (
                <ExperienceCard
                    key={index}
                    title={exp.title}
                    content={exp.content}
                    startDate={exp.startDate}
                    endDate={exp.endDate}
                    timeSpend={exp.timeSpend}
                    isFirst={index === 0}
                />
            ))}
        </div>
    );
}

export default Profissional;


const Card = styled.div<{isFirst?:boolean}>`
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
  text-align: left;

  min-width: 500px;
  max-width: 500px;
  min-height: 200px;
  border: 2px solid #02735E;
  border-radius: 8px;
  padding: 10px;
  margin: 15px;
  background-color: ${({ isFirst }) => (isFirst ? 'rgba(2, 115, 94, 0.2)' : 'transparent')};
  @media (max-width: 768px) {
    min-width: 50dvw;
    width: 80dvw; 
    max-width: 100dvh;
    margin: 10px 0; 
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 8px;
  color: #cccccc;
`;

const Content = styled.p`
  font-size: 1rem;
  margin-bottom: 30px;
  color: #777;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

const Date = styled.span`
  font-size: 0.9rem;
  color: #038C65;
`;
