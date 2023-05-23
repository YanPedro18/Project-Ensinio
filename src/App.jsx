import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Components/Card/Card.jsx";

import {
  Container,
  Section,
  Section_flex
} from "./Styles.js";
import Options from "./Components/Options/Options.jsx";



function App() {

  const [response, setResponse] = useState([]);

  
  useEffect(() => {
    try {
      axios.get('http://localhost:3000/posts')
      .then(function (resp) {
        setResponse(resp.data);
        
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
      });
    } catch (error) {
      console.log(error);
    }
  },[])

 

  return (
    <Container>
    <Options 
    options={[
      { image: '/lang/brazil.png', text: 'PT', value: 'option1' },
      { image: '/lang/usa.png', text: 'EN', value: 'option2' },
      { image: '/lang/spain.png', text: 'ES', value: 'option3' }
    ]}

    />
      <Section>
        {response.map((card) => {
          return ( 
           <Section_flex key={card.id}>
           <Card
             imageSrc={card.image}
             title={card.title}
             text={card.content}
           
           />
         </Section_flex>
         )
      })}
       

      </Section>
    </Container>
  );
}

export default App;
