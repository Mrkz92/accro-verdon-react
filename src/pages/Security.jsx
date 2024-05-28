import Layout from "../components/Layout";
import Container from "../components/Container";

export default function Security() {
  return (
    <div className="Security">
      <Layout>
        <Container context="security">
          <h1>Sécurité</h1>
          <ul>
            <li>
              Tous les parcours sont équipés de lignes de vie continues rendant
              impossible le décrochage des longes tout au long des parcours.
            </li>
            <li>
              Les arbres, installations et EPI (baudriers, longes, poulies...)
              sont contrôlés tous les ans conformément aux normes en vigueur.
            </li>
            <li>
              L’encadrement est assuré par du personnel titulaire du CQP «
              Opérateur de Parc Acrobatique en Hauteur ».
            </li>
            <li>
              Étant une activité de plein air, le parc est susceptible de fermer
              en cas de conditions météo défavorables (pluie, vent, orage,
              risque incendie élevé).
            </li>
            <li>
              Une tenue adaptée est nécessaire pour la pratique des activités
              (chaussures fermées, torse couvert, cheveux attachés...).
            </li>
            <li>Le poids maximal admissible est de 120 kg.</li>
          </ul>
          <a
            class="rules-link"
            href="./docs/Panneau_infos_verignon_2022.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Télécharger les règles générales du parc
          </a>
        </Container>
      </Layout>
    </div>
  );
}
