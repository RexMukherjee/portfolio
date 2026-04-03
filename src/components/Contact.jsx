import { FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

function Contact() {
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(""); // success | error

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs
      .sendForm(
        "service_h5e5rqr",
        "template_878qm5i",
        form.current,
        "PfjgXx71raRR79OlS"
      )
      .then(
        () => {
          setLoading(false);
          setStatus("success");

        setTimeout(() => {
            setStatus("");
        }, 3000);
          form.current.reset();
        },
        (error) => {
          setLoading(false);
          setStatus("error");
          setTimeout(() => {
            setStatus("");
        }, 3000);
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contact" className="px-6 py-24 max-w-6xl mx-auto">

      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-blue-400">
        Contact
      </h2>

      <div className="grid md:grid-cols-2 gap-10">

        {/* LEFT */}
        <div>
          <p className="text-gray-400 mb-6 leading-relaxed">
            I'm currently open to internships and opportunities.  
            Feel free to reach out if you want to collaborate or just say hi 👋
          </p>

          {/* Email */}
        <p className="text-gray-300 mb-3">
        📧 Email:
        <a
            href="mailto:mukherjeerudra2004@gmail.com"
            className="text-blue-400 ml-2 hover:underline"
        >
            mukherjeerudra2004@gmail.com
        </a>
        </p>

        {/* Phone */}
        <p className="text-gray-300 mb-4">
        📞 Phone:
        <a
            href="tel:+919674975070"
            className="text-blue-400 ml-2 hover:underline"
        >
            +91 96749 75070
        </a>
        </p>

          <div className="flex gap-6 mt-6 text-xl">
            <a
              href="https://github.com/RexMukherjee"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/rudranil-mukherjee"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 shadow-lg">

          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">

            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="bg-gray-800 border border-gray-700 px-4 py-2 rounded-lg text-sm focus:outline-none focus:border-blue-500"
            />

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="bg-gray-800 border border-gray-700 px-4 py-2 rounded-lg text-sm focus:outline-none focus:border-blue-500"
            />

            <textarea
              rows="4"
              name="message"
              placeholder="Your Message"
              required
              className="bg-gray-800 border border-gray-700 px-4 py-2 rounded-lg text-sm focus:outline-none focus:border-blue-500"
            ></textarea>

            {/* ✅ Status Message */}
            {status === "success" && (
              <p className="text-green-400 text-sm">
                Message sent successfully ✅
              </p>
            )}

            {status === "error" && (
              <p className="text-red-400 text-sm">
                Failed to send message ❌
              </p>
            )}

            {/* ✅ Button */}
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-500 hover:bg-blue-600 py-2 rounded-lg font-medium transition duration-300 hover:shadow-lg hover:shadow-blue-500/30 disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

          </form>

        </div>

      </div>
    </div>
  );
}

export default Contact;