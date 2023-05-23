
import {Image, Title, Text} from '../../Styles';

function Card({imageSrc, title, text, language}) {
    const getTextByLanguage = () => {
        switch (language) {
          case "en":
            return text.en; // Altere para o campo correto no seu JSON
          case "pt":
            return text.pt; // Altere para o campo correto no seu JSON
          case "es":
            return text.es; // Altere para o campo correto no seu JSON
          default:
            return text.en; // Texto padrão em inglês
        }
      };
    return(
        <>
        <Image src={imageSrc} alt="imagem do card"/>
        <Title>{title}</Title>
        <Text>{text}</Text>
        </>
    )
}

export default Card;