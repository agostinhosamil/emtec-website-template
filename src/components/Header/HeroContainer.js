import { useAppContext } from "~/src/config/appContext"

export const HeroContainer = () => {
  const { header } = useAppContext()
  
  return (
    <section id="hero" className="container">
      <header>
        <h2>
          { header.title }
        </h2>
      </header>
      <p>
        { header.description }
      </p>
      <ul className="actions">
        <li><a href="#" className="button">Get this party started</a></li>
      </ul>
    </section>
  )
}
