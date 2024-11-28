import { Helmet } from "react-helmet";
import Navbar from "./components/Navbar";
import LogoSlider from "./components/LogoSlider";
import Footer from "./components/Footer";
import ProjectSlider from "./components/ProjectSlider";

export default function App() {
  return (
    <>
      <div>
        <Helmet>
          <title>Home | Marcello Web Developer</title>
          <meta name="description" content="Home of my portfolio." />
        </Helmet>

        <Navbar />
        <div className="flex items-center justify-around">
          <div>
            <h1 className="text-5xl">Marcello</h1>
            <h2 className="text-3xl">Front End Developer</h2>
          </div>

          <img
            src="./img/profile.JPG"
            alt="Immagine profilo"
            className="rounded-full md:h-80 shadow-xl"
          />
        </div>

        <LogoSlider />

        <ProjectSlider />

        <Footer></Footer>
      </div>
    </>
  );
}
