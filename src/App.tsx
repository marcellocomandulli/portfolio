import { Helmet } from "react-helmet";
import Navbar from "./components/Navbar";
import LogoSlider from "./components/LogoSlider";
import Footer from "./components/Footer";
import ProjectSlider from "./components/ProjectSlider";
import TextRotator from "./components/TextRotator";

export default function App() {
  return (
    <>
      <div>
        <Helmet>
          <title>Home | Marcello Web Developer</title>
          <meta name="description" content="Home of my portfolio." />
        </Helmet>

        <Navbar />

        <div className="flex flex-col items-center h-svh p-4">
          <div>
            <h1 className="text-5xl">Marcello Comandulli</h1>
            <TextRotator />
            <p className="mt-10">Mi sono congedato dall'Arma dei Carabinieri dopo 6 anni di servizio e iniziato a studiare con Start2Impact University per diventare Front End Developer. <br /><br />Sono stato 3 mesi in Asia zaino in spalla dove ho volato con il mio drone in alcuni dei posti più belli del mondo.<br /><br />Dopo 15 anni di studi di musica, sai cosa mi piace di più? Trovare un pianoforte per strada e iniziare a suonare per la gente che passa.</p>
          </div>

          <img
            src="./img/profile.webp"
            alt="Immagine profilo"
            className="rounded-2xl shadow-xl h-80 mt-8 md:h-96"
          />
        </div>

        <LogoSlider />

        <ProjectSlider />

        <Footer></Footer>
      </div>
    </>
  );
}
