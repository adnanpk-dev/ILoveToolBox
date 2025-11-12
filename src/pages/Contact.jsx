import { Github, Linkedin, Twitter, Facebook, Instagram, Mail } from "lucide-react";

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 text-center">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        Contact <span className="text-indigo-600">MyTools</span>
      </h1>

      <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto">
        Have a question, suggestion, or want to collaborate?  
        We’d love to hear from you — our project is fully open source and welcomes contributors.
      </p>

      {/* Email Section */}
      <div className="bg-gray-50 p-6 rounded-2xl shadow-sm mb-10 flex flex-col items-center">
        <Mail className="text-indigo-600 mb-3" size={28} />
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Email Us</h2>
        <a
          href="mailto:support@mytools.dev"
          className="text-indigo-600 font-medium hover:underline"
        >
          support@mytools.dev
        </a>
      </div>

      {/* Social Links */}
      <div className="bg-indigo-50 p-8 rounded-2xl shadow-sm">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Connect with Us
        </h2>

        <div className="flex justify-center flex-wrap gap-6 text-gray-700">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-indigo-600 transition"
          >
            <Github size={22} /> <span>GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-indigo-600 transition"
          >
            <Linkedin size={22} /> <span>LinkedIn</span>
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-indigo-600 transition"
          >
            <Twitter size={22} /> <span>Twitter</span>
          </a>
          <a
            href="https://facebook.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-indigo-600 transition"
          >
            <Facebook size={22} /> <span>Facebook</span>
          </a>
          <a
            href="https://instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-indigo-600 transition"
          >
            <Instagram size={22} /> <span>Instagram</span>
          </a>
        </div>
      </div>

      <div className="mt-12 text-sm text-gray-500">
        <p>
          © {new Date().getFullYear()} MyTools — Built by the open-source community 🌍
        </p>
      </div>
    </div>
  );
}
