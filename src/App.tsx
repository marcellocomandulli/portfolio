import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <div>
        <Helmet>
          <title>Home | Marcello Web Developer</title>
          <meta name="description" content="Home of my portfolio." />
        </Helmet>

        <Navbar />
        <h1>Marcello</h1>
        <h2>simao belli</h2>

        <Slider />
      </div>
    </>
  );
}

export default App;
