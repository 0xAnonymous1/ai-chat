import { useState } from "react";
import arrow from "../Hero/images/arrow.svg";

const languages = [
  { code: "en", name: "English", flag: "https://en.wikipedia.org/wiki/Flag_of_the_United_Kingdom#/media/File:Flag_of_the_United_Kingdom_(1-2).svg" },
  { code: "es", name: "Espanol", flag: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg" },
  { code: "fr", name: "Coming Soon", flag: "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg" },
  { code: "cn", name: "Coming Soon", flag: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_China.svg" },
  { code: "jp", name: "Coming Soon", flag: "https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg" },
];

export default function LanguageSelector() {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const selectLanguage = (language) => {
    if (language.name !== "Coming Soon") {
      setSelectedLanguage(language);
      setDropdownOpen(false);
    }
  };

  return (
    <div className="relative inline-block text-white ">
      <div className="flex items-center space-x-7  py-2 px-2 min-w-44 rounded-full text-lg cursor-pointer bg-white/15" onClick={toggleDropdown}>
        <img src={selectedLanguage.flag} alt={selectedLanguage.name} className="w-12 h-12 rounded-full border" />
        <h1>{selectedLanguage.name}</h1>
        <img className={`transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} src={arrow} alt="arrow" />
      </div>
      {dropdownOpen && (
        <ul className="absolute md:-left-40 mt-2 -left-0 md:min-w-72 lg:min-w-96 bg-black/70 backdrop-blur-md rounded-[30px] shadow-lg overflow-hidden z-10 grid grid-cols-3 gap-4 p-4 ">
          {languages.map((language) => (
            <div key={language.code} className=" rounded-[20px] flex items-center justify-center p-2 bg-white/10 ">
              <li
                className={`cursor-pointer ${language.name === "Coming Soon" ? 'opacity-50 text-center cursor-not-allowed' : (language.code === selectedLanguage.code ? 'opacity-70' : 'opacity-100 hover:opacity-100')}`}
                onClick={() => selectLanguage(language)}
              >
                <img src={language.flag} alt={language.name} className="md:w-14 w-6 md:h-14 h-6 rounded-full mx-auto " />
                <span>{language.name}</span>
              </li>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
}