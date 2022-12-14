import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/navbar.modules.css";
import "../styles/home.modules.css";
import "../styles/root.modules.css";
import "../styles/about.modules.css";
import "../styles/contact.modules.css";
import "../styles/testimonials.modules.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
