import Link from 'next/link'
import { HeroContainer } from './HeroContainer'
//import { useAppContext } from '~/src/config/appContext'

export const Header = () => {

  return (
    <div id="header-wrapper">
      <div id="header" className="container">
  
        <h1 id="logo">
          <Link href="/">Página Inicial</Link>
        </h1>
        
        <nav id="nav">
          <ul>
            <li>
              <a href="#">Dropdown</a>
              <ul>
                <li><a href="#">Lorem ipsum dolor</a></li>
                <li><a href="#">Magna phasellus</a></li>
                <li><a href="#">Etiam dolore nisl</a></li>
                <li>
                  <a href="#">Phasellus consequat</a>
                  <ul>
                    <li><a href="#">Lorem ipsum dolor</a></li>
                    <li><a href="#">Phasellus consequat</a></li>
                    <li><a href="#">Magna phasellus</a></li>
                    <li>
                      <a href="#">Etiam dolore nisl xxx</a>
                      <ul>
                        <li><a href="#">Lorem ipsum dolor</a></li>
                        <li><a href="#">Phasellus consequat</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li><a href="#">Veroeros feugiat</a></li>
              </ul>
            </li>
            <li>
              <Link href="/about">Sobre Nós</Link>
            </li>
            <li className="break">
              <Link href="/services?__eAll">Serviços</Link>
            </li>
            <li>
              <Link href="/contact">Contacto</Link>
            </li>
          </ul>
        </nav>
  
      </div>
  
      
      <HeroContainer />
  
    </div>
  )
}