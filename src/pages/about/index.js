import { Article } from '@components/Article'
import { useAppContext } from '~/src/config/appContext'

export default function About () {
  const { company_informations } = useAppContext()

  return (
    <div className="wrapper" style={{ background: "#f0f4f5" }}>
      <div className="container" id="main">
        <div className="row gtr-150">
          <div className="col-4 col-12-narrower">
    
            <section id="sidebar">
              <section>
                <header>
                  <h3>Quem somos e o que fazemos por si.</h3>
                </header>
                <p>Nós, a EMTEC trabalhamos na sua segurança eletrónica.</p>
                <ul className="actions">
                  <li><a href="#" className="button">Ler mais...</a></li>
                </ul>
              </section>
              <section>
                <a href="#" className="image featured">
                  {/*<img src="images/pic07.jpg" alt="" />*/}


                  <iframe src="https://www.youtube.com/embed/byZUv0znISQ" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </a>
                <header>
                  <h3>Saiba em que podemos fazer por si.</h3>
                </header>
                <p>Veja nesse video o que a EMTEC faz para garantir sua segurança.</p>
                <ul className="actions">
                  <li><a href="#" className="button">Ver video</a></li>
                </ul>
              </section>
            </section>

          </div>
          <div className="col-8 col-12-narrower imp-narrower">

            {company_informations && company_informations.map(company_information => (
              <Article key={ company_information.id } { ...company_information } />
            ))}
            
          </div>
        </div>
        
      </div>
    </div>
  )
}
