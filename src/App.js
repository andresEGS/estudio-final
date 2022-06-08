import { useEffect, useState } from 'react'
import {
  Container,
  Header,
  Wrapper,
  Footer,
  Texts,
  Subscribe
} from './App.styles.js'

function App() {
  const [quote, setQuote] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    enviaEmail()
    setEmail('')
  }

  const llamaData = async () => {
    await fetch('https://api.kanye.rest')
      .then((response) => response.json())
      .then((data) => setQuote(data.quote))
    // .then(console.log)
    // .catch(setQuote(null))
  }

  useEffect(() => {
    llamaData()
  }, [])

  const enviaEmail = async () => {
    // Ejemplo implementando el metodo POST:
    await fetch('https://webhook.site/91e8681d-80d5-4ee8-87c3-da782ae428d5', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(email) // body data type must match "Content-Type" header
    })
  }

  return (
    <Container>
      <Header>
        <img src="/img/logo.png" alt="logo image" />
      </Header>
      <Wrapper>
        <Texts>
          <div id="principal">
            <div>
              {/* <h1>"Cargando"</h1> */}
              <h1>{quote}</h1>
              <p>
                This is your Kanye West quote for today, click below to
                <br />
                get another one
              </p>
              <button onClick={llamaData}>GET NEW ONE</button>
            </div>
          </div>
          <img src="/img/featured_image.jpg" alt="" />
        </Texts>
        <Subscribe>
          <h1>"Be the first to access it"</h1>
          <p>Subscribe to receive updates and join our beta list.</p>

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name=""
              id="id"
              placeholder="Enter you email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input type="submit" value="Subscribe" />
          </form>
        </Subscribe>
      </Wrapper>

      <Footer>© Copyrigth 2022</Footer>
    </Container>
  )
}

export default App
