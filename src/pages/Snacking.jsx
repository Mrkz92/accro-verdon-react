import Layout from "../components/Layout";
import Container from "../components/Container";
import menuSnack from "../assets/pictures/Carte Snack1.jpeg";

export default function Snacking() {
  return (
    <div className="Snacking">
      <Layout>
        <Container context="snacking">
          <h1>L'Accro Guinguette</h1>
          <div className="imgContainer">
            <img src={menuSnack} alt="Menu Snack" />
          </div>
        </Container>
      </Layout>
    </div>
  );
}
