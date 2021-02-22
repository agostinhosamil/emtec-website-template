import { FooterContainer } from "./styles";
import { ShortServiceList } from "@components/ServiceList/Short";
import { SocialMediaList } from "./SocialMediaList";
import { FooterContactForm } from "./ContactForm";

export const Footer = () => (
  <FooterContainer>
    <ShortServiceList />
    <div id="footer-wrapper">
      <div id="footer" className="container">
        <header className="major">
          <h2>Encontre-nos nas Redes sociais</h2>
          <p>Estamos presentes nas mídias sociais.<br />
          Poderá enviar uma mensagem.</p>
        </header>
        <div className="row">
          <section className="col-6 col-12-narrower">
            <FooterContactForm />
          </section>
          <section className="col-6 col-12-narrower">
            <div className="row gtr-0">
              <SocialMediaList />
            </div>
          </section>
        </div>
      </div>
      <div id="copyright" className="container">
        <ul className="menu">
          <li>&copy; EMTEC. todos os direitos reservados.</li>
        </ul>
      </div>
    </div>
  </FooterContainer>
)
