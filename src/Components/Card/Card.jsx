// Card.jsx

import React from "react";
//criando outra estrutura para card
import {  Container, Image, Title, Text } from "../../Styles.js";
import { useTranslation } from "react-i18next";

function Card({ imageSrc, cardKey }) {
  //novamente usando translation do i18n
  const { t } = useTranslation();

  return (
    <Container>
      <Image src={imageSrc} alt="Card Image" />
      {/* //passei como props o cardkey para title e content por causa da props em app.jsx */}
      <Title>{t(`${cardKey}.title`)}</Title>
      <Text>{t(`${cardKey}.content`)}</Text>
    </Container>
  );
}

export default Card;
