import Layout from "../components/Layout";
import Container from "../components/Container";
import menuSnack from "../assets/pictures/snack-unit.png";

export default function Snacking() {
  return (
    <div className="Snacking">
      <Layout>
        <Container context="snacking">
          <h1>L'Accro Guinguette</h1>
          <div className="Snacking__presentation">
            <ul>
              <li>
                En plein coeur du parc Accro Verdon, nous vous accueillons tous
                les jours en saison (juillet / aout), les weekends, jours fériés
                et vacances scolaires hors saison. Veuillez vérifier les jours
                d’ouverture et horaires sur la page Google{" "}
                <a href="https://maps.app.goo.gl/nuWvWwypBGBHYCJG9">
                  Accro Guinguette
                </a>
              </li>
              <li>
                Boissons fraîches, glaces, gaufres, crèpes, et snacking vous
                attendent sous notre pinède ombragée.
              </li>
              <li>
                Chaque semaines de nouvelles suggestions vous sont proposées.
              </li>
            </ul>
          </div>
          <div className="imgContainer">
            <img src={menuSnack} alt="Menu Snack" />
          </div>
        </Container>
      </Layout>
    </div>
  );
}
