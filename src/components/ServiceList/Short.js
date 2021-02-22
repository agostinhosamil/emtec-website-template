import Link from 'next/link'

import { Fragment } from 'react';
import { Service } from "./Service"
import { useAppContext } from '@config/appContext';

import arraySplit from 'array-split-base'

export const ShortServiceList = () => {
  const { services } = useAppContext()

  const serviceListRows = services && arraySplit(services, 3) || []

  if (!( serviceListRows instanceof Array )) {
    return <Fragment>jams</Fragment>
  }

  return (
    <div className="wrapper">
      <section className="container">
        <header className="major">
          <h2>Eis alguns de nossos serviços</h2>
          <p>Entre em contacto e saiba o que podemos fazer por voçê..</p>
        </header>
        
        {serviceListRows.map((serviceListRow, serviceListRowIndex) => (
          <div key={ serviceListRowIndex } className="row features">
            { serviceListRow.map((service, serviceIndex) => <Service key={ serviceIndex } { ...service } />) }
          </div>
        ))}
        
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
