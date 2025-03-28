import { GOOGLE_URL, APPLE_PLAY } from "../utils/constants.js";
import logo from "../utils/img/logo.png";

export const FooterComponent = () => {
  return (
    <footer className="bg-[#1E3A8A] text-white p-6 w-full">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 border-b border-gray-400">
        <h1 className="text-center md:text-left text-xl md:text-2xl font-semibold">
          For a better experience, download the MyFood app now!
        </h1>
        <div className="flex gap-4">
          <img className="w-32 cursor-pointer hover:scale-105 transition" src={GOOGLE_URL} alt="Google Play" />
          <img className="w-32 cursor-pointer hover:scale-105 transition" src={APPLE_PLAY} alt="Apple Store" />
        </div>
      </div>

      {/* Footer Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-6">
        {/* Logo Section */}
        <div className="flex flex-col items-center text-center">
          <img src={logo} className="w-20" alt="MyFood Logo" />
          <p className="text-sm opacity-75 mt-2">© 2024 MyFood Limited</p>
        </div>

        {/* Footer Links */}
        {[
          { title: "Company", links: ["About Us", "Careers", "Team"] },
          { title: "Contact Us", links: ["Help & Support", "Partner with us", "Ride with us"] },
          { title: "Legal", links: ["Cookie Policy", "Privacy Policy", "Investor Relations"] },
          { title: "Available in:", links: ["Bangalore", "Delhi", "Chennai"] },
          { title: "Social Links", links: ["LinkedIn", "X", "Instagram"] },
        ].map((section, index) => (
          <div key={index}>
            <h2 className="text-lg font-semibold mb-2">{section.title}</h2>
            <ul className="space-y-1 text-sm opacity-90">
              {section.links.map((link, idx) => (
                <li key={idx} className="hover:text-gray-300 cursor-pointer transition">
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};
