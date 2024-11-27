import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import { Helmet } from "react-helmet";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div>
        <Helmet>
          <title>Home | Marcello Web Developer</title>
          <meta name="description" content="Home of my portfolio." />
        </Helmet>

        <Navbar />
        <div>
          <h1 className="text-5xl">Marcello</h1>
          <h2 className="text-3xl">Front End Developer</h2>
        </div>

        <Slider />

        <div>
          progettoni
        </div>

        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
