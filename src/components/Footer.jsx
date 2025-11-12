import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 mt-20">
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

        {/* Brand Column */}
        <div>
          <h2 className="text-2xl font-bold text-white">MyTools</h2>
          <p className="mt-3 text-gray-400 text-sm">
            Powerful tools for work, creativity, and productivity — all in one platform. Whether you’re designing graphics, converting files, planning projects, editing media, or building something new, everything you need is right here.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/tools" className="hover:text-white">Tools</Link></li>
        
            
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-3">Support</h3>
          <ul className="space-y-2">
            <li><Link to="/about-us" className="hover:text-white">About Us</Link></li>
            <li><Link to="/contact-us" className="hover:text-white">Contact Us</Link></li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="text-center mt-12 border-t border-gray-700 pt-6 text-sm">
        © {new Date().getFullYear()} MyTools. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
