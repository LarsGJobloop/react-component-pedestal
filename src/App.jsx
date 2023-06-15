import './App.css'

import { ExternalLink } from './components/ExternalLink/ExternalLink'

function App() {
  return (
    <div className='App'>
      <header>

      </header>

      <main className='component-gallery'>

        <section>
          <footer>
            <h2>External Link component</h2>
            <p>Dette er en komponent som brukes når vi skal linke til ekstern sider</p>
          </footer>

          <section>
            <ExternalLink href="https://google.com">
              Link to google
            </ExternalLink>
          </section>

          <footer>
            <nav>
              <li>
                <a href="">React Components</a>
              </li>
              <li>
                <a href="">React Props</a>
              </li>
              <li>
                <a href="">React Children Props</a>
              </li>
              <li>
                <a href="">MDN Anchor element</a>
              </li>
            </nav>
          </footer>
        </section>

        <section>
          <footer>
            <h2>Feed for Articles gotten from Realworld.how</h2>
            <p>Dette er en komponent som brukes når vi skal linke til ekstern sider</p>
          </footer>

          <section>
            <ExternalLink href="https://google.com">
              Link to google
            </ExternalLink>
          </section>

          <footer>
            <nav>
              
            </nav>
          </footer>
        </section>

      </main>

      <footer>
        
      </footer>
    </div>
  )
}

export default App
