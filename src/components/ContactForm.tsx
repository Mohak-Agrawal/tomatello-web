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
      setTimeout(() => setStatus("idle"), 4000);
    }, 1200);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-10 max-w-md">
      <h3 className="text-xs uppercase tracking-[0.45em] text-[#9c8978]">
        Send a Message
      </h3>

      {/* Name */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="name"
          className="text-xs uppercase tracking-widest text-neutral-500"
        >
          Your Name
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="py-3 border-b border-neutral-300 bg-transparent focus:border-[#9c8978] outline-none transition-colors duration-300"
        />
      </div>

      {/* Email */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="email"
          className="text-xs uppercase tracking-widest text-neutral-500"
        >
          Email Address
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="py-3 border-b border-neutral-300 bg-transparent focus:border-[#9c8978] outline-none transition-colors duration-300"
        />
      </div>

      {/* Message */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="message"
          className="text-xs uppercase tracking-widest text-neutral-500"
        >
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="py-3 border-b border-neutral-300 bg-transparent focus:border-[#9c8978] outline-none transition-colors duration-300 resize-none"
        />
      </div>

      {/* Button */}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="self-start text-sm uppercase tracking-[0.3em] text-[#252525] border border-[#9c8978] px-8 py-3 hover:bg-[#9c8978] hover:text-white transition-all duration-300 disabled:opacity-50"
      >
        {status === "submitting" ? "Sending..." : "Order / Inquiry"}
      </button>

      {/* Status Messages */}
      {status === "success" && (
        <p className="text-sm text-neutral-600 italic">
          Thank you. We’ll be in touch shortly.
        </p>
      )}

      {status === "error" && (
        <p className="text-sm text-neutral-500 italic">
          Please complete all fields.
        </p>
      )}
    </form>
  );
};

export default ContactForm;
