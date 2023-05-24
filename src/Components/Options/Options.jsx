/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  OptionsContainer,
  SelectButton,
  OptionsList,
  Option,
  OptionImage,
} from "../../Styles.js";
//importe novamente o use translation
import { useTranslation } from "react-i18next";

function Options({ options }) {
  //abrir modal
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  //usando i18n em options
  const { i18n } = useTranslation();

  const toggleOptions = () => {
    //função para options
    setIsOpen(!isOpen);
  };

  const handleChangeLanguage = (option) => {
    //setando a linguagem com value do card
    i18n.changeLanguage(option.value);
    //armazei estado atual de option
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <OptionsContainer>
      {/* se existir o selectdOption, ele carrega minha img e text dela */}
      <SelectButton onClick={toggleOptions}>
        {selectedOption ? (
          <>
            <OptionImage src={selectedOption.image} alt="Option Image" />
            {selectedOption.text}
          </>
        ) : (
          //se nao passamos somente algo default
          <>
            <OptionImage src={options[0].image} alt="Option Image" />
            {options[0].text}
          </>
        )}
      </SelectButton>
      {/* so vai abrir se tiver o optionlist com o props isopen, passando o props option para o map */}
      {isOpen && (
        <OptionsList isOpen={isOpen}>
          {/* //slice serve para nao carregar 3 options ao clicar */}
          {options.slice(1).map((option) => (
            //passando key, função onclick em option e img, text
            <Option key={option.value} onClick={() => handleChangeLanguage(option)}>
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
