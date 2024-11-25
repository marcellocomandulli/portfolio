import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";

export default function Contacts() {
  return (
    <>
      <Helmet>
        <title>Contacts | Marcello Web Developer</title>
        <meta name="description" content="Contact me." />
      </Helmet>

      <Navbar />
      <h1>pagina contacts</h1>
    </>
  );
}
