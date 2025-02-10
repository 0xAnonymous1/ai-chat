import { useState } from "react";
import arrow from "../Hero/images/arrow.svg";

const languages = [
  { code: "en", name: "English", flag: "https://images.pexels.com/photos/4386429/pexels-photo-4386429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { code: "es", name: "Espanol", flag: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg" },
  { code: "fr", name: "Coming Soon", flag: "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg" },
  { code: "cn", name: "Coming Soon", flag: "https://img.freepik.com/premium-photo/italy-rippled-country-flag_764664-16003.jpg?w=826" },
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
    <div  data-aos="fade-left" className="relative inline-block text-white z-50 ">
      <div className="flex items-center space-x-4 overflow-visible hover:bg-white/8   py-1 px-1 min-w-40 rounded-full text-lg cursor-pointer bg-white/15" onClick={toggleDropdown}>
        <img src={selectedLanguage.flag} alt={selectedLanguage.name} className="w-8 h-8 rounded-full " />
        <h1>{selectedLanguage.name}</h1>
        <img className={`transition-transform w-10 ${dropdownOpen ? 'rotate-180' : ''}`} src={arrow} alt="arrow" />
      </div>
      {dropdownOpen && (
        <div className="overflow-hidden">
        <ul  data-aos="zoom-in"  data-aos-duration="300"   className="absolute  your-div  scrollbar-none md:-left-40 mt-2 lg:w-[500px] lg:h-[400px]    w-[180px] md:w-auto gap-2 p-2   overflow- bg-[black]  md:bg-black/70 backdrop-blur-[40px] rounded-[30px] shadow-lg  z-10 md:border-[0.5px] border-[#7F7F7F] grid grid-cols-1 md:grid-cols-3 lg:gap-4 lg:p-4 ">
          {languages.map((language) => (
            <div key={language.code} className=" rounded-[20px]  hover:bg-white/8  hover:scale-105 duration-300  delay-100  transition-all flex   items-center justify-center p-4 lg:p-2 bg-white/15 ">
              <li
                className={`cursor-pointer  flex flex-col items-start md:items-center justify-center  gap-2
  ${language.name === "Coming Soon" ? 'opacity-50 text-center flex-row md:flex-col cursor-not-allowed' : (language.code === selectedLanguage.code ? 'opacity-70' : 'opacity-100 hover:opacity-100')}`}
                onClick={() => selectLanguage(language)}
              >
                <img src={language.flag} alt={language.name} className="md:w-20  w-6 md:h-20 h-6 rounded-full mx-auto " />
                <span>{language.name}</span>
              </li>
            </div>
          ))}
        </ul>
        </div>
      )}
    </div>
  );
}