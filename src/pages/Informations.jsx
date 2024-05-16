import Layout from "../components/Layout";
import Container from "../components/Container";

export default function Informations() {
  return (
    <div className="Informations">
      <Layout context="informations">
        <Container context="informations">
          <div className="Informations__hours Informations__container">
            <h2>Nos horaires</h2>
            <div className="hours-description Informations__subContainer">
              <h3>Ouverture d'avril à octobre</h3>
              <a href="https://www.google.com/search?q=accro+verdon+horaires&oq=accro+verdon+horaires&aqs=chrome..69i57.7797j0j1&sourceid=chrome&ie=UTF-8">
                <b>
                  * Veuillez cliquer sur se lien pour retrouver les horaires du
                  parc sur la page Google *
                </b>
              </a>
            </div>
            {/*
            <div className="hours-description Informations__subContainer">
              <h4>Juillet / Août</h4>
              <p>Ouvert tous les jours</p>
            </div>
            <div className="hours-description Informations__subContainer">
              <h4>Vacances scolaires (Pâques / Toussaint)</h4>
              <h5>Pâques</h5>
              <p>Zone B : Ouvert tous les après-midi</p>
              <p>
                Autres zones : Ouvert l'après-midi tous les mercredis et
                week-end
              </p>
              <h5>Toussaint</h5>
              <p>Ouvert tous les après-midi</p>
            </div>
            <div className="hours-description Informations__subContainer">
              <h4>En dehors</h4>
              <p>Ouvert tous les week-end et jours fériés</p>
            </div>
  */}
          </div>
          <div className="Informations__location Informations__container">
            <h2>Où nous trouver</h2>
            <div className="location-description Informations__subContainer">
              <p>
                <i class="ri-map-pin-fill" /> Carrefour D49 et D957 83630
                Vérignon
              </p>
              <div className="map">
                <iframe
                  className="map-m"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2885.5360539657504!2d6.221266900000001!3d43.6786179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x98c531ee35fdbb01!2sAccro%20Verdon!5e0!3m2!1sen!2sfr!4v1660816782065!5m2!1sen!2sfr"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
                <iframe
                  className="map-s"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2885.5290288467486!2d6.219254615437934!3d43.678763979120404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cbe36791830ca7%3A0x98c531ee35fdbb01!2sAccro%20Verdon!5e0!3m2!1sen!2sfr!4v1657016729839!5m2!1sen!2sfr"
                  width="400"
                  height="300"
                  style={{ border: 0 }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
                <iframe
                  className="map-xs"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2885.5360539657504!2d6.221266900000001!3d43.6786179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x98c531ee35fdbb01!2sAccro%20Verdon!5e0!3m2!1sen!2sfr!4v1660816782065!5m2!1sen!2sfr"
                  width="350"
                  height="280"
                  style={{ border: 0 }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </Container>
      </Layout>
    </div>
  );
}
