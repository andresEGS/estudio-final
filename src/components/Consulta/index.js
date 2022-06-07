import { useState } from 'react'
import { FooterComponent } from '../shared/Footer'
import { Container, Header, Nav, Section, Wrapper } from './consulta.styles'

export const Consulta = () => {
  const [usuario, setUsuario] = useState(null)
  const [id, setId] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
    llamaData(id)
  }

  const llamaData = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => setUsuario(data))
      .catch(setUsuario(null))
  }

  return (
    <Container>
      <Wrapper>
        <Header>
          <Nav>
            <h1>fbdfbdfbdfbdfbdfb dfbdfbdfbdfbdfbdf</h1>

            <form onSubmit={handleSubmit}>
              <input
                type="number"
                name=""
                id="id"
                placeholder="Id del usuario"
                onChange={(e) => setId(e.target.value)}
              />
              <input type="submit" value="CONSULTAR" />
            </form>
          </Nav>
        </Header>
        {usuario !== null ? (
          <Section>
            <article>
              <div>
                <ul>
                  <li>
                    <h2>rvsdv: </h2>
                    {usuario.name}
                  </li>
                  <li>
                    <h2>rvsdv: </h2>
                    {/* {usuario.company.name} */}
                  </li>
                  <li>
                    <h2>rvsdv: </h2>
                    {usuario.phone}
                  </li>
                </ul>
              </div>
            </article>
            <article>
              <div>
                <ul>
                  <li>
                    <h2>rvsdv: </h2>
                    {usuario.username}
                  </li>
                  <li>
                    <h2>rvsdv: </h2>
                    {usuario.website}
                  </li>
                  <li>
                    <h2>rvsdv: </h2>
                    {usuario.email}
                  </li>
                </ul>
              </div>
            </article>
          </Section>
        ) : (
          ''
        )}
      </Wrapper>
      <FooterComponent />
    </Container>
  )
}
