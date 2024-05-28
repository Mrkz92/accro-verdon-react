import Header from "./Header";
import Footer from "./Footer";
import "./Layout.scss";
import Guidap from "./Guidap";

export default function Layout({ children, context }) {
  return (
    <div className={`Layout Layout--${context}`}>
      <Header />
      {children}
      <Footer />
      <Guidap />
    </div>
  );
}
