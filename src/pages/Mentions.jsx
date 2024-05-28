import Layout from "../components/Layout";
import Container from "../components/Container";

export default function Mentions() {
  return (
    <div className="Mentions">
      <Layout>
        <Container context="mentions">
          <div className="mentions-container">
            <h1>Mentions légales</h1>
            <ul className="mentions-list">
              <li className="mentions-item">
                <p>
                  En vertu de l’article 6 de la loi n° 2004-575 du 21 juin 2004
                  pour la confiance dans l’économie numérique, il est précisé
                  aux utilisateurs du site internet http://www.accro-verdon.com
                  l’identité des différents intervenants dans le cadre de sa
                  réalisation et de son suivi:
                </p>
                <h3>Editeur du site</h3>
                <ul>
                  <li>
                    Aumades Aventure, entreprise propriétaire d'Accro Verdon
                  </li>
                  <li>SASU au capital de 10 000€</li>
                  <li>28 chemin du plan deffends - 83630 Moissac-Bellevue</li>
                  <li>
                    <i className="fa-solid fa-phone"></i>
                    <a href="tel:0892976256"> 08 92 97 62 56</a>
                  </li>
                </ul>
              </li>
              <li className="mentions-item">
                <h3>Administrateur du site</h3>
                <ul>
                  <li>Marek Zaorski</li>
                  <li>
                    <i className="fa-solid fa-at"></i>
                    <a href="mailto:zaorski.marek@outlook.fr">
                      {" "}
                      zaorski.marek@outlook.fr
                    </a>
                  </li>
                </ul>
              </li>
              <li className="mentions-item">
                <h3>Hébergeur</h3>
                <ul>
                  <li>Ce site est hébergé par OVH</li>
                  <li>SAS au capital de 10 174 560€</li>
                  <li>2 rue Kellermann - 59000 Roubaix - France</li>
                  <li>
                    <i className="fa-solid fa-phone"></i>
                    <a href="tel:1007"> 1007</a>
                  </li>
                  <li>
                    <i className="fa-solid fa-at"></i>
                    <a href="mailto:support@ovh.com"> support@ovh.com</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </Container>
      </Layout>
    </div>
  );
}
