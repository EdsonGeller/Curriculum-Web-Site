import styled from 'styled-components';

const education = [
    {
        title: 'Superior, Análise e desenvolvimento de sistemas',
        content: 'Estudante do curso de Análise e desenvolvimento de sistemas pela UNISC.',
        startDate: 'Fev 2023',
        endDate: 'Jun 2025',
    },
    {
        title: 'Desenvolvimento de Software',
        content: 'Estudos relacionados à desenvolvimento de software por meio das plataformas Udemy e Alura.',
        startDate: '2021',
        endDate: 'Atualmente',
    },
    {
        title: 'Língua Inglesa - Avançado',
        content: 'Em 2021, concluí o curso de inglês avançado na instituição UpTime.',
        startDate: 'Fev 2019',
        endDate: 'Jan 2021',
    },
    {
        title: 'Desenhista Mecânico',
        content: 'Concluído o curso de Desenhista Mecânico na instituição SENAI por meio do programa Jovem Aprendiz.',
        startDate: 'Fev 2019',
        endDate: 'Dez 2019',
    },
];

interface EducationProps {
    title: string;
    content: string;
    startDate: string;
    endDate: string;
    isFirst?: boolean;
}

function EducationCard({ title, content, startDate, endDate, isFirst}: EducationProps) {
    return (
        <Card isFirst={isFirst}>
            <Title>{title}</Title>
            <Content>{content}</Content>
            <Footer>
                <Date>
                    {startDate} - {endDate}
                </Date>
            </Footer>
        </Card>
    );
}

function Academico() {
    return (
        <div>
            {education.map((exp, index) => (
                <EducationCard
                    key={index}
                    title={exp.title}
                    content={exp.content}
                    startDate={exp.startDate}
                    endDate={exp.endDate}
                    isFirst={index === 0}
                />
            ))}
        </div>
    );
}

export default Academico;


const Card = styled.div<{ isFirst?: boolean }>`
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
