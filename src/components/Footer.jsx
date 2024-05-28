import { NavLink } from "react-router-dom";
import logo from "../assets/icons/logo+name-s.png";
import "./Footer.scss";

export default function Footer({ context }) {
  return (
    <div className="Footer">
      <div className="Footer__div">
        <img src={logo} alt="Accro Verdon" className="Footer__logo" />

        <ul className="Footer__info">
          <li className="Footer__info--location">
            <h3 id="foundUs">Retrouvez-nous</h3>
            <span id="address">
              <i className="ri-map-pin-fill" /> Carrefour D49 et D957
              <br />
              83630 Vérignon
            </span>
          </li>
          <li className="Footer__info--contact">
            <h3 id="contactUs">Contactez-nous</h3>
            <div>
              <div className="phone">
                <h4>
                  <i className="ri-phone-fill"></i> Par téléphone (sms ou appel)
                  :
                </h4>
                <a href="tel:+33682077102">06 82 07 71 02</a>
              </div>
              <div className="mail">
                <h4>
                  <i className="ri-at-line"></i> Par mail (réponse sous 24h) :
                </h4>
                <a href="mailto:reservation@accro-verdon.fr">
                  reservation@accro-verdon.fr
                </a>
              </div>
            </div>
          </li>
        </ul>

        <ul className="Footer__social">
          <li className="Footer__social--link instagram">
            <a
              href="https://www.instagram.com/AccroVerdon/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="ri-instagram-fill instagram__logo"></i>
            </a>
          </li>
          <li className="Footer__social--link facebook">
            <a
              href="https://www.facebook.com/AccroVerdon/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="ri-facebook-circle-fill facebook__logo"></i>
            </a>
          </li>
        </ul>
        <ul className="Footer__legal">
          <li className="legal">
            <NavLink to="/mentions">Mentions légales</NavLink>
          </li>
          <li className="copyright">
            <span>© 2024 Accro Verdon. All rights reserved</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
