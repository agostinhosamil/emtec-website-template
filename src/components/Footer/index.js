import { Fragment } from "react";
import { ShortServiceList } from "@components/ServiceList/Short";

export const Footer = () => (
  <Fragment>
    <ShortServiceList />
    <div id="footer-wrapper">
      <div id="footer" className="container">
        <header className="major">
          <h2>Euismod aliquam vehicula lorem</h2>
          <p>Lorem ipsum dolor sit amet consectetur et sed adipiscing elit. Curabitur vel sem sit<br />
          dolor neque semper magna lorem ipsum feugiat veroeros lorem ipsum dolore.</p>
        </header>
        <div className="row">
          <section className="col-6 col-12-narrower">
            <form method="post" action="#">
              <div className="row gtr-50">
                <div className="col-6 col-12-mobile">
                  <input name="name" placeholder="Name" type="text" />
                </div>
                <div className="col-6 col-12-mobile">
                  <input name="email" placeholder="Email" type="text" />
                </div>
                <div className="col-12">
                  <textarea name="message" placeholder="Message"></textarea>
                </div>
                <div className="col-12">
                  <ul className="actions">
                    <li><input type="submit" value="Send Message" /></li>
                    <li><input type="reset" value="Clear form" /></li>
                  </ul>
                </div>
              </div>
            </form>
          </section>
          <section className="col-6 col-12-narrower">
            <div className="row gtr-0">
              <ul className="divided icons col-6 col-12-mobile">
                <li className="icon brands fa-twitter"><a href="#"><span className="extra">twitter.com/</span>untitled</a></li>
                <li className="icon brands fa-facebook-f"><a href="#"><span className="extra">facebook.com/</span>untitled</a></li>
                <li className="icon brands fa-dribbble"><a href="#"><span className="extra">dribbble.com/</span>untitled</a></li>
              </ul>
              <ul className="divided icons col-6 col-12-mobile">
                <li className="icon brands fa-instagram"><a href="#"><span className="extra">instagram.com/</span>untitled</a></li>
                <li className="icon brands fa-youtube"><a href="#"><span className="extra">youtube.com/</span>untitled</a></li>
                <li className="icon brands fa-pinterest"><a href="#"><span className="extra">pinterest.com/</span>untitled</a></li>
              </ul>
            </div>
          </section>
        </div>
      </div>
      <div id="copyright" className="container">
        <ul className="menu">
          <li>&copy; Untitled. All rights reserved.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
        </ul>
      </div>
    </div>
  </Fragment>
)
