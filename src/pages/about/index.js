import { Article } from './Article'


export default function About () {
  return (
    <div className="wrapper">
      <div className="container" id="main">
        <div className="row gtr-150">
          <div className="col-4 col-12-narrower">

            
            <section id="sidebar">
              <section>
                <header>
                  <h3>Quem somos e o que fazemos por si.</h3>
                </header>
                <p>Lorem ipsum dolor sit amet consectetur et sed adipiscing elit. Curabitur et vel
                sem sit amet dolor neque semper magna. Lorem ipsum dolor sit amet consectetur et dolore
                adipiscing elit. Curabitur vel sem sit.</p>
                <ul className="actions">
                  <li><a href="#" className="button">Magna amet nullam</a></li>
                </ul>
              </section>
              <section>
                <a href="#" className="image featured"><img src="images/pic07.jpg" alt="" /></a>
                <header>
                  <h3>Saiba em que </h3>
                </header>
                <p>Lorem ipsum dolor sit amet consectetur et sed adipiscing elit. Curabitur et vel
                sem sit amet dolor neque semper magna. Lorem ipsum dolor sit amet consectetur et dolore
                adipiscing elit. Curabitur vel sem sit.</p>
                <ul className="actions">
                  <li><a href="#" className="button">Ipsum sed dolor</a></li>
                </ul>
              </section>
            </section>

          </div>
          <div className="col-8 col-12-narrower imp-narrower">

            <Article title="Quem somos" subTitle="Lorem ipsum dolor sit amet consectetur et sed adipiscing elit dolor neque semper magna lorem ipsum." />
            <Article title="Quem somos" subTitle="Lorem ipsum dolor sit amet consectetur et sed adipiscing elit dolor neque semper magna lorem ipsum." />
            <Article title="Quem somos" subTitle="Lorem ipsum dolor sit amet consectetur et sed adipiscing elit dolor neque semper magna lorem ipsum." />
            <Article title="Quem somos" subTitle="Lorem ipsum dolor sit amet consectetur et sed adipiscing elit dolor neque semper magna lorem ipsum." />            

          </div>
        </div>
        
      </div>
    </div>
  )
}
