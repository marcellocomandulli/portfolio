import { useState } from "react";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";

export default function Contacts() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });

    if (value.trim() !== "") {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = { name: "", email: "" };
    let isValid = true;

    if (formData.name.trim() === "") {
      validationErrors.name = "Il campo Nome è obbligatorio.";
      isValid = false;
    }

    if (formData.email.trim() === "") {
      validationErrors.email = "Il campo Email è obbligatorio.";
      isValid = false;
    }

    setErrors(validationErrors);

    if (isValid) {
      console.log("Dati inviati:", formData);
      alert("Modulo inviato!");
    }
  };

  return (
    <>
      <Helmet>
        <title>Contacts | Marcello Web Developer</title>
        <meta name="description" content="Contact me." />
      </Helmet>

      <Navbar />
      <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
        Contatti
      </h1>
      <div className="flex justify-center">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full mb-16 border border-gray-200">
          <form className="space-y-6">
            <div>
              <input
                type="text"
                id="name"
                className="mt-1 p-3 w-full border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#e1f56d]"
                placeholder="Nome"
              />
            </div>

            <div>
              <input
                type="email"
                id="email"
                className="mt-1 p-3 w-full border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#e1f56d]"
                placeholder="E-mail"
              />
            </div>

            <div>
              <textarea
                id="message"
                rows="4"
                className="mt-1 p-3 w-full border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#e1f56d]"
                placeholder="Scrivi il tuo messaggio..."
              ></textarea>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="w-28 md:w-full py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
              >
                Invia
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
