import Link from 'next/link'

import { Service } from "./Service"


export const ShortServiceList = () => {
  return (
    <div className="wrapper">
      <section className="container">
        <header className="major">
          <h2>Eis alguns de nossos serviços</h2>
          <p>Entre em contacto e saiba o que podemos fazer por voçê..</p>
        </header>
        <div className="row features">
          <Service id="1" image="/images/pic03.jpg" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo" />
          <Service id="1" image="/images/pic03.jpg" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo" />
          <Service id="1" image="/images/pic03.jpg" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo" />          
        </div>
        <ul className="actions major">
          <li>
            <Link href="/services?__ref=ServiceShortList">
              Ver lista completa
            </Link>
          </li>
        </ul>
      </section>
    </div>
  )
}
