import React from "react";
import Layout from "../components/Layout";
import Container from "../components/Container";
import Gallery from "../components/Gallery"; // Assurez-vous que le chemin est correct

const images = [
  "gallery/accroverdon_0722001.png",
  "gallery/accroverdon_0722002.png",
  "gallery/accroverdon_0722003.png",
  "gallery/accroverdon_0722004.png",
  "gallery/accroverdon_0722005.png",
  "gallery/accroverdon_0722006.png",
  "gallery/accroverdon_0722007.png",
  "gallery/accroverdon_0722008.png",
  "gallery/accroverdon_0722009.png",
  "gallery/accroverdon_0722010.png",
  "gallery/accroverdon_0722011.png",
  "gallery/Accro Verdon Snack1.jpeg",
  "gallery/Accro Verdon Snack2.jpeg",
  "gallery/Accro Verdon Snack3.jpeg",
  "gallery/Accro Verdon Snack6.jpeg",
];

export default function GalleryPage() {
  return (
    <div className="GalleryPage">
      <Layout context="galleryPage">
        <Container context="gallery">
          <h1>L'aventure en images</h1>
          <Gallery images={images} />
        </Container>
      </Layout>
    </div>
  );
}
