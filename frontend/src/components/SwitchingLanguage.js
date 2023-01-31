import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const languageMap = [
   { value: "en", label: "English", dir: "ltr", active: true },
   { value: "fr", label: "Français", dir: "ltr", active: false }
];

const SwitchingLanguage = () => {
  const { i18n } = useTranslation();

  const [selectedLanguage, setSelectedLanguage] = useState(languageMap[0].value);

  const handleLenguageChnage = (language) => {
    setSelectedLanguage(language.target.value);
    i18n.changeLanguage(language.target.value);
  }

    return (
    <select onChange={language => handleLenguageChnage(language)} value={selectedLanguage} id="set-language">
        {languageMap.map((language) => (
          <option value={language.value}>{language.label}</option>
        ))}
      </select>
    );
};
  
export default SwitchingLanguage;
