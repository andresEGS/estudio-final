import { FooterComponent } from '../shared/Footer'
import { Container, NavLinkRouter, Section, Wrapper } from './home.styles'

export const Home = () => {
  return (
    <Container>
      <Wrapper>
        <Section>
          <h1>fbdfbdfbdfbdfbdfb dfbdfbdfbdfbdfbdf</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur <br />
            adipisicing elit. Saepe
          </p>
          <NavLinkRouter to="consultas">consultar</NavLinkRouter>
        </Section>
        <img src="/img/kSnhGC3.jpg" alt="" srcset="" />
      </Wrapper>
      <FooterComponent />
    </Container>
  )
}
