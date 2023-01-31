//mport i18next from "i18next";

import React, { useState } from 'react';

const languageMap = [
   { value: "en", label: "English", dir: "ltr", active: true },
   { value: "fr", label: "Français", dir: "ltr", active: false }
];

const SwitchingLanguage = () => {

  const [selectedLanguage, setSelectedLanguage] = useState(languageMap[0].value);

    return (
        <>
    <select onChange={language => setSelectedLanguage(language.value)} value={selectedLanguage} name="set-language">
        {languageMap.map((language) => (
          <option value={language.value}>{language.label}</option>
        ))}
      </select>
        </>
    );
};
  
export default SwitchingLanguage;
