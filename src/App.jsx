import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Adventure from "./components/Adventure/Adventure";
import Holidays from "./components/Holidays/Holidays";
import Gallery from "./components/Gallery/Gallery";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Adventure />
        <Holidays />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
