import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";

export default function Works() {
  const projects = [
    {
      id: 0,
      img: (
        <img
          src=""
          alt="ItalyCharge. L'app per trovare le colonnine di ricarica delle auto elettriche."
        />
      ),
      par: (
        <p>
          Questo è stato il progetto finale del mio Master come Front End
          Developer su{" "}
          <a href="https://www.start2impact.it/?utm_source=google&utm_medium=cpc&utm_campaign=Search_Brand&gad_source=1&gclid=Cj0KCQiAuou6BhDhARIsAIfgrn5CQEM84m5GVfyu1APLW0N6tku9kZ1B62ruUDNL0TXPjhaNiQeuRBUaAjVpEALw_wcB">
            Start2Impact
          </a>{" "}
          di cui sono molto soddisfatto
        </p>
      ),
    },
    {
      id: 1,
      img: (
        <img
          src=""
          alt="VegetariApp. La mia prima vera app interamente sviluppata con React.js."
        />
      ),
      par: (
        <p>
          La mia prima vera app scritta interamente in React.js. Permette di
          cercare ricette vegetariane utilizzando le API di{" "}
          <a href="https://spoonacular.com/food-api">Spoonacular.</a>
        </p>
      ),
    },
    {
      id: 2,
      img: (
        <img
          src=""
          alt="Un progetto più avanzato in JavaScript con l'utilizzo di API."
        />
      ),
      par: (
        <p>
          Qui ho imparato a fare la chiamata API con JavaScript per poter
          stampare a schermo delle informazioni giornalistiche.
        </p>
      ),
    },
    {
      id: 3,
      img: (
        <img
          src=""
          alt="Questo è un piccolo progetto per muovere i primi passi in JavaScript."
        />
      ),
      par: (
        <p>
          Con questo progetto in JavaScript dovevo programmare un semplice
          contatore. Per renderlo un po' più accattivante l'ho trasformato in
          una tombola dove si possono estrarre i numeri evidenziandoli sul
          tabellone, visualizza gli ultimi 4 estratti e c'è un tasto di reset.
        </p>
      ),
    },
    {
      id: 4,
      img: (
        <img
          src=""
          alt="Il mio primo portfolio in cui ho inserito i primi progetti realizzati."
        />
      ),
      par: (
        <p>
          Il mio primo portfolio in cui ho inserito i primi progetti.
          Interamente realizzato in HTML e CSS, più qualche piccolo pezzo di
          Javascript.
        </p>
      ),
    },
    {
      id: 5,
      img: (
        <img
          src=""
          alt="Il mio primo progetto in HTML e CSS per creare il sito web di un hotel fittizio."
        />
      ),
      par: (
        <p>
          Questo è stato il mio primo progetto in HTML e CSS per creare il sito
          web di un hotel fittizio.
        </p>
      ),
    },
  ];

  return (
    <>
      <Helmet>
        <title>Works | Marcello Web Developer</title>
        <meta name="description" content="Here you can find all my works." />
      </Helmet>
      
      <Navbar />
      <h1 className="text-4xl text-center">I miei progetti</h1>

      <div className="flex flex-col items-center md:flex-row md:justify-center md:flex-wrap">
        {projects.map((project) => (
          <div
            key={project.id}
            className="w-96 h-72 p-2 my-7 rounded shadow md:mx-7 "
          >
            <div className="m-3 rounded shadow">{project.img}</div>
            <div className="">{project.par}</div>
          </div>
        ))}
      </div>
    </>
  );
}
