import Header from "./Header";
import Footer from "./Footer";
import "./Layout.scss";

export default function Layout({ children, context }) {
  return (
    <div className={`Layout Layout--${context}`}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
