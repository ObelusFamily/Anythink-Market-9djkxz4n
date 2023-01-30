import i18next from "i18next";

import Select from 'react-select';
import React, { useState } from 'react';

const languageMap = [
   { value: "en", label: "English", dir: "ltr", active: true },
   { value: "fr", label: "Français", dir: "ltr", active: false }
];

const SwitchingLanguage = () => {

  const [value, setValue] = useState(languageMap[0].value);
  const handleChange = (newValue) => {
    setValue(newValue);
  };

    return (
        <>
            <button onClick={() => i18next.changeLanguage('en')}> English </button>
            <button onClick={() => i18next.changeLanguage('fr')}> Franche </button> 

            <Select
            className="basic-single"
            classNamePrefix="select"
            defaultValue={languageMap[0].label}
            name="language"
            value={value} onChange={handleChange}
            >
                {languageMap.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
              </Select>

        </>
    );
};
  
export default SwitchingLanguage;
