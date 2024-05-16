import Layout from "../components/Layout";
import Container from "../components/Container";
import parkMap from "../assets/pictures/park-map.png";

export default function Stages() {
  return (
    <div className="Stages">
      <Layout context="stages">
        <Container context="stages">
          <h1>Découvrez Nos Parcours</h1>
          <ul className="Stages__infos">
            <li>
              Tous les parcours sont équipés de systèmes de longes rendant
              impossible leur décrochage tout au long des activités.
            </li>
            <li>
              Vous évoluerez donc en toute sécurité dans l’ensemble du parc
              Accro Verdon.
            </li>
            <li>
              Une initiation est systématiquement dispensée par les opérateurs
              afin d’expliquer les règles de sécurité et le fonctionnement du
              matériel.
            </li>
          </ul>
          <ul className="Stages__list">
            <li className="Stages__items stage1">
              <h2>PICHONS</h2>
              <ul className="Stages__rules">
                <li>
                  Accessible à partir de 3 ans, si taille inférieure à 1m20,
                  accompagnateur obligatoire.
                </li>
                <li>
                  Avec des plateformes situées à 1,50 m de hauteur maximum, vous
                  pourrez accompagner vos enfants tout au long de l’activité.
                  Descente en luge, tyroliennes, mur d’escalade...un parcours
                  dédié aux aventuriers en herbe!
                </li>
              </ul>
            </li>
            <li className="Stages__items stage2">
              <h2>JOVENTS</h2>
              <ul className="Stages__rules">
                <li>Accessible à partir de 7 ans, taille minimum 1m20.</li>
                <li>
                  Ce parcours est varié: tyroliennes, passerelle chinoise,
                  monocycle... Les plateformes sont situées entre 3 et 5 m du
                  sol. Parfait pour s’échauffer avant de se lancer dans les
                  autres parcours, les plus jeunes y trouveront déjà quelques
                  défis.
                </li>
              </ul>
            </li>
            <li className="Stages__items stage3">
              <h2>ENVOLADA</h2>
              <ul className="Stages__rules">
                <li>Accessible à partir de 7 ans, taille minimum 1m20.</li>
                <li>
                  Avec sa plus haute plateforme située à 14m offrant une vue
                  imprenable sur le grand Margès et le plateau de Valensole,
                  faites le plein de sensations grâce à ce parcours composé de 9
                  tyroliennes.
                </li>
              </ul>
            </li>
            <li className="Stages__items stage4">
              <h2>VIRA-VIRA</h2>
              <ul className="Stages__rules">
                <li>Accessible à partir de 7 ans, taille minimum 1m20.</li>
                <li>
                  Composé d’un mur d’escalade légèrement déversant suivi d’un
                  saut dans le vide à 8m de haut, ce parcours fera transpirer
                  toutes les générations!
                </li>
              </ul>
            </li>
            <li className="Stages__items stage5">
              <h2>CHORMA</h2>
              <ul className="Stages__rules">
                <li>Accessible à partir de 11 ans, taille minimum 1m30.</li>
                <li>
                  Mêlant force et adresse avec des plateformes situées entre 5
                  et 8 m, ce parcours très complet se termine par un saut dans
                  le vide, de quoi faire frissonner les plus aguerris!
                </li>
              </ul>
            </li>
          </ul>
          <div className="Stages__map">
            <img src={parkMap} alt="" />
          </div>
        </Container>
      </Layout>
    </div>
  );
}
