import React from "react";
import Layout from "../components/Layout";
import Container from "../components/Container";
import Gallery from "../components/Gallery";
import images from "../data/gallery";

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
