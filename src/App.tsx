import styled from 'styled-components'
import './App.css'
import GuideBar from './components/guide-bar'
import Habilidades from './pages/habilidades'
import SobreMim from './pages/sobre-mim'
import Inicio from './pages/Inicio/Index'
import Carreira from './pages/carreira'
// import Recomendacoes from './pages/recomendacoes'
import Contato from './pages/contato'
import FastContact from './components/fast-contact'

function App() {

  return (
    <>
      <GuideBar />
      <FastContact />
      <Container>
        <Section id='section1'><Inicio /></Section>
        <Section id='section2'><SobreMim /></Section>
        <Section id='section3'><Habilidades /></Section>
        <Section id='section4'><Carreira /></Section>
        {/* <Section id='section5'><Recomendacoes /></Section> */}
        <Section id='section6'><Contato /></Section>
      </Container>

    </>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const Section = styled.div`
  min-height: 100vh;
  
`

export default App
