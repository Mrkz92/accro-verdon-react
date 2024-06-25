import React from "react";
import Container from "../components/Container";
import Layout from "../components/Layout";
import birthdayCard from "../assets/pictures/anniversaire-1.png";
import Guidap from "../components/Guidap";

export default function Reservation(context) {
  return (
    <div className="Reservation">
      <Layout context="reservation">
        <Container context="reservation">
          <h1>Réservation</h1>
          <div className="Reservation__container">
            <div className="Reservation__part Reservation__part--solo">
              <div className="title__group">
                <h2>Individuel</h2>
              </div>
              <div className="Reservation__grid Reservation__grid--solo">
                <div className="cell ages ages1">3/6 ans</div>
                <div className="cell price price1">€12,00</div>

                <div className="cell ages ages2">7/10 ans</div>
                <div className="cell price price2">€16,00</div>

                <div className="cell ages ages3">11 ans et +</div>
                <div className="cell price price3">€20,00</div>
              </div>
            </div>
            <div className="Reservation__part Reservation__part--group">
              <div className="title__group">
                <h2>Groupe</h2>
                <span>
                  <b>10 pers. et + (-15%)</b>
                </span>
              </div>

              <div className="Reservation__grid Reservation__grid--group">
                <div className="cell ages ages1">3/6 ans</div>
                <div className="cell price price1">€10,20</div>

                <div className="cell ages ages2">7/10 ans</div>
                <div className="cell price price2">€13,60</div>

                <div className="cell ages ages3">11 ans et +</div>
                <div className="cell price price3">€17,00</div>
              </div>
            </div>
            <div className="Reservation__part Reservation__part--event">
              <p>
                Événements particuliers, CE, privatisation du parc…
                <br />
                Nous pouvons vous proposer des formules complètes avec activité
                et repas, n’hésitez pas à nous contacter.
              </p>
              <h2>Anniversaire et EVJM</h2>
              <img src={birthdayCard} alt="" srcset="" />
            </div>
          </div>
        </Container>
      </Layout>
    </div>
  );
}
