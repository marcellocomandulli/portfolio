import { useState } from "react";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";
import emailjs from "@emailjs/browser";
import Footer from "../components/Footer";

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

  const [isSending, setIsSending] = useState(false); // Stato per l'invio
  const [successMessage, setSuccessMessage] = useState(""); // Messaggio di successo

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });

    if (value.trim() !== "") {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      validationErrors.email = "Inserisci un indirizzo email valido.";
      isValid = false;
    }

    setErrors(validationErrors);

    if (!isValid) return;

    setIsSending(true);
    setSuccessMessage("");

    try {
      // Invia l'email con EmailJS
      const response = await emailjs.send(
        "service_zmsh2kh", // Sostituisci con il tuo ID servizio
        "template_tqqsrrj", // Sostituisci con il tuo ID template
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "Da4Nv0sg88t4aMQUs" // Sostituisci con la tua chiave pubblica
      );

      if (response.status === 200) {
        setSuccessMessage("Email inviata con successo!");
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      console.error("Errore durante l'invio dell'email:", error);
      alert("Si è verificato un errore durante l'invio dell'email.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contacts | Marcello Web Developer</title>
        <meta name="description" content="Contact me." />
      </Helmet>

      <Navbar />
      <div className="flex flex-col items-center mb-5 mx-5">
        <h1 className="text-5xl font-semibold mb-6">
          Contatti
        </h1>
        <h2 className="text-center">
          Qui puoi mandare una e-mail, per entrare subito in contatto con me. <br />
          Verrai immediatamente ricontattato
        </h2>
      </div>

      <div className=" mx-5 flex justify-center">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full mb-16 border border-gray-200">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Nome */}
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`mt-1 p-3 w-full border rounded-lg shadow-sm focus:outline-none ${
                  errors.name
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-blue-500"
                }`}
                placeholder="Nome"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`mt-1 p-3 w-full border rounded-lg shadow-sm focus:outline-none ${
                  errors.email
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-blue-500"
                }`}
                placeholder="E-mail"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Messaggio */}
            <div>
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="mt-1 p-3 w-full border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Scrivi il tuo messaggio..."
              ></textarea>
            </div>

            {/* Pulsante */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-28 md:w-full py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
                disabled={isSending}
              >
                {isSending ? "Invio..." : "Invia"}
              </button>
            </div>

            {/* Messaggio di successo */}
            {successMessage && (
              <p className="text-green-500 text-center mt-4">
                {successMessage}
              </p>
            )}
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}
