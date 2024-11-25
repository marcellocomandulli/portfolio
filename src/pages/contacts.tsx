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

    let validationErrors = { name: "", email: "" };
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

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4">
        <div className="flex flex-col">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Nome"
            className={`border p-2 rounded ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.name && (
            <span className="text-red-500 text-sm">{errors.name}</span>
          )}
        </div>

        <div className="flex flex-col">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="E-mail"
            className={`border p-2 rounded ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email}</span>
          )}
        </div>

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Scrivi il tuo messaggio..."
          className="border p-2 rounded"
        ></textarea>

        <button
          type="submit"
          className="bg-blue-500 text-white rounded p-2 w-24"
        >
          Invia
        </button>
      </form>
    </>
  );
}
