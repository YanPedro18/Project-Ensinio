/* eslint-disable react/prop-types */
import { useState } from "react";
import {OptionsContainer, SelectButton, OptionsList, Option, OptionImage} from "../../Styles.js";
import { useTranslation } from "react-i18next";




function Options({ options, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleOptions = () => {
    setIsOpen(!isOpen);
  };

  const [currentLanguage, setCurrentLanguage] = useState('en'); 
  const {t, i18n: {
    changeLanguage, language 
  }} = useTranslation();

  const handleChangeLanguage = () => {
    const newLanguage = currentLanguage === 'en' ? 'es' : 'en'
    changeLanguage(newLanguage)
    setCurrentLanguage(newLanguage)
  }
  return (
    <OptionsContainer>
    <SelectButton onClick={toggleOptions}>
      {selectedOption ? (
        <>
          <OptionImage src={selectedOption.image} alt="Option Image" />
          {selectedOption.text}
        </>
      ) : (
        <>
          <OptionImage src={options[0].image} alt="Option Image" />
          {options[0].text}
        </>
      )}
    </SelectButton>
    {isOpen && (
      <OptionsList isOpen={isOpen}>
        {options.slice(1).map((option) => (
          <Option
            key={option.value}
            onClick={()=> console.log('teste')}
          >
            <OptionImage src={option.image} alt="Option Image" />
            {option.text}
          </Option>
        ))}
      </OptionsList>
    )}
  </OptionsContainer>
  );
}

export default Options;
