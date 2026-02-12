import { useState } from "react";

const ContactForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
      return;
    }

    setStatus("submitting");

    setTimeout(() => {
      console.log("Form Submitted:", { name, email, message });
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
      setTimeout(() => setStatus("idle"), 5000);
    }, 1500);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-6 p-0 bg-transparent border-0 shadow-none"
    >
      <h3 className="text-xl font-bold uppercase text-[#9c8978] tracking-wider mb-2 pb-2">
        Send us a Message
      </h3>

      <div className="flex flex-col">
        <label htmlFor="name" className="text-sm font-medium mb-1">
          Your Name
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="p-3 bg-transparent border border-gray-300 focus:border-[#9c8978] focus:ring-0 text-base"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="email" className="text-sm font-medium mb-1">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="p-3 bg-transparent border border-gray-300 focus:border-[#9c8978] focus:ring-0 text-base"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="message" className="text-sm font-medium mb-1">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="p-3 bg-transparent border border-gray-300 focus:border-[#9c8978] focus:ring-0 text-base"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="
          font-mono text-base font-medium 
          bg-[#9c8978] text-[#252525] 
          py-4 px-8 uppercase tracking-wider
          hover:opacity-90 transition-all duration-200
          disabled:bg-gray-400 disabled:cursor-not-allowed
        "
      >
        {status === "submitting"
          ? "Sending..."
          : "Reserve Table / Send Inquiry"}
      </button>

      {status === "success" && (
        <p className="text-center text-green-700 bg-green-100 p-3 text-sm">
          Thank you! Your message has been received.
        </p>
      )}
      {status === "error" && (
        <p className="text-center text-red-700 bg-red-100 p-3 text-sm">
          Please fill out all fields correctly.
        </p>
      )}
    </form>
  );
};

export default ContactForm;
