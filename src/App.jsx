import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Components/Card/Card.jsx";
import { Container, Section, Section_flex } from "./Styles.js";
import Options from "./Components/Options/Options.jsx";
import { useTranslation, I18nextProvider } from "react-i18next";
import i18n from "./i18n";

function App() {
  //peguei o i18n
  const { t } = useTranslation();
  const [response, setResponse] = useState([]);
  
  //fazendo requisição
  useEffect(() => {
    try {
      axios.get('https://json-teste-three.vercel.app/posts')
      .then(function (resp) {
        setResponse(resp.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    //colocando toda a doc dentro do i18next, passando a props do i18n
    <I18nextProvider i18n={i18n}>
      <Container>
        <Options
        //utilizando as props de option
          options={[
            { image: '/lang/brazil.png', text: 'PT', value: 'pt_BR' },
            { image: '/lang/usa.png', text: 'EN', value: 'en_US' },
            { image: '/lang/spain.png', text: 'ES', value: 'es_419' }
          ]}
        />
        <Section>
          {/* //gerando os dados da api fake e mapeando um novo array */}
          {response && response.map((card) => (
            <Section_flex key={card.id}>
              <Card
                imageSrc={card.image}
                //peguei card key e puxei a linguagem  de text e content pelo id
                cardKey={`card${card.id}`}
              />
            </Section_flex>
          ))}
        </Section>
      </Container>
    </I18nextProvider>
  );
}

export default App;
