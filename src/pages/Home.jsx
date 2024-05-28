import VideoIntro from "../components/VideoIntro";
import CurvedWelcome from "../assets/svg/curved-welcome.svg";
import logoL from "../assets/icons/logo+name-L.png";
import Banner from "../components/Banner";
import Layout from "../components/Layout";
import Container from "../components/Container";
import { useInView } from "react-intersection-observer";
import Guidap from "../components/Guidap";

export default function Home({ children }) {
  const { bannerInView, bannerInViewRef } = useInView({
    trackVisibility: true,
    delay: 100,
  });
  const { presentationInView, presentationInViewRef } = useInView({
    trackVisibility: true,
    delay: 100,
  });

  return (
    <div className="Home">
      <Layout context="home">
        <Container context="home">
          <Banner
            context="home"
            image1={CurvedWelcome}
            image2={logoL}
            ref={bannerInViewRef}
            className={`${bannerInView ? "isVisible" : ""}`}
          >
            {bannerInView ? { children } : null}
          </Banner>
          <Container context="presentation">
            <div id="presentation__text">
              <ul>
                <li className="presentation presentation1">
                  Accro-Verdon vous accueille sur un site arboré de 6 hectares
                  au coeur du parc naturel régional du Verdon et à deux pas du
                  Lac de Ste-Croix.
                </li>
                <li className="presentation presentation2">
                  Toute notre équipe est impatiente de vous faire découvrir nos
                  tyroliennes, sauts dans le vide, luges et monocycles suspendus
                  en toute sécurité !
                </li>
                <li className="presentation presentation3">
                  Vous trouverez également sur place, de quoi vous rafraîchir au
                  milieu de la nature verdoyante du haut et ainsi qu'une vue
                  imprenable du haut de nos plateformes.
                </li>
                <li className="presentation presentation4">
                  Restauration sur place.
                </li>
              </ul>
            </div>
          </Container>
          {/*<Container
            context="presentation"
            ref={presentationInViewRef}
            className={`${presentationInView ? "isVisible" : ""}`}
          >
          {presentationInView ? (
            <>
            (
              <div id="presentation__text">
              <ul>
              <li className="presentation presentation1">
              Accro-Verdon vous accueille sur un site arboré de 6
              hectares au coeur du parc naturel régional du Verdon et à
              deux pas du Lac de Ste-Croix.
              </li>
              <li className="presentation presentation2">
              Toute notre équipe est impatiente de vous faire découvrir
              nos tyroliennes, sauts dans le vide, luges et monocycles
              suspendus en toute sécurité !
              </li>
              <li className="presentation presentation3">
              Vous trouverez également sur place, de quoi vous
              rafraîchir au milieu de la nature verdoyante du haut et
              ainsi qu'une vue imprenable du haut de nos plateformes.
              </li>
              <li className="presentation presentation4">
              Restauration sur place.
              </li>
              </ul>
              </div>
            )
            </>
            ) : null}
          </Container>*/}
        </Container>
        <VideoIntro />
      </Layout>
    </div>
  );
}
