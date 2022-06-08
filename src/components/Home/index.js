import { FooterComponent } from '../shared/Footer'
import { Container, NavLinkRouter, Section, Wrapper } from './home.styles'

export const Home = () => {
  return (
    <Container>
      <Wrapper>
        <Section>
          <img src="/img/img1.png" alt="" srcset="" />
          <h1>"Life is the ultimate gift"</h1>
          <p>
            This is your kanye west quote for today, click below to <br />
            get another one
          </p>
          <NavLinkRouter to="consultas">Get new one</NavLinkRouter>
        </Section>
          <img src="/img/img2.webp" alt="" srcset="" />
        <br />
        <section>
          <div></div>
        </section>
        <section>
          <div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
          <h2>Be the first to access it</h2>
          <br />
          <p>Subscribe to receive updates and join our beta list.</p> <br />
          <NavLinkRouter to="consultas">Subscribe</NavLinkRouter>
        </section>
      </Wrapper>
      <FooterComponent />
    </Container>
  )
}
