# Project-Ensinio
 
Documentação - Project-Ensinio
Visão geral
Project-Ensinio é um projeto desenvolvido utilizando Vite.js como ferramenta de construção de aplicativos web. Ele oferece uma seção hero onde são exibidos três cards que contêm informações em diferentes idiomas. O usuário tem a opção de escolher entre as linguagens: espanhol, português e inglês, para exibir os títulos e textos presentes nos cards. O projeto utiliza as seguintes tecnologias:
<br />
•	Vite.js: uma ferramenta de desenvolvimento rápida para criar aplicativos web modernos. <br />
•	Axios: uma biblioteca para fazer requisições HTTP. <br />
•	JSON Server: uma biblioteca para criar um servidor REST simulado com um arquivo JSON. <br />
•	Styled Components: uma biblioteca para estilizar componentes React utilizando CSS-in-JS. 
•	useEffect: um hook do React para executar efeitos colaterais em componentes funcionais. 
•	useState: um hook do React para gerenciar estado em componentes funcionais.

Estrutura do projeto
O projeto possui a seguinte estrutura de pastas e arquivos: <br />
•	public/: diretório contendo os arquivos estáticos do projeto. <br />
•	src/: diretório raiz do código-fonte.
•	components/: diretório contendo os componentes reutilizáveis do projeto. <br />
•	Card.jsx: componente que exibe as informações em um card. <br />
•	Option.jsx: componente que permite ao usuário escolher a linguagem. <br />
•	styles.js: arquivo contendo os estilos definidos com o Styled Components.
•	App.jsx: arquivo principal do aplicativo. <br />
•	index.css: arquivo CSS global do projeto. 
•	index.jsx: ponto de entrada do aplicativo. <br />
Funcionamento do projeto
No arquivo App.jsx, encontramos a seção hero do projeto, onde são renderizados três cards. Esses cards são gerados dinamicamente através de um mapeamento dos dados presentes no arquivo db.json, que contém as informações dos cards em diferentes idiomas. <br />
O componente Card recebe as informações de título e texto como propriedades e as exibe no card correspondente. O componente Option permite ao usuário escolher a linguagem desejada, que por sua vez atualiza o estado do aplicativo e causa a renderização dos cards com os dados na linguagem selecionada. <br />
Executando o projeto
Para executar o projeto Project-Ensinio, siga as etapas abaixo: 
1.	Certifique-se de ter o Node.js instalado em sua máquina.
2.	Faça o download ou clone o repositório do projeto.
3.	Navegue até o diretório raiz do projeto no terminal. <br />
4.	Execute o comando npm install para instalar as dependências do projeto.
5.	Execute o comando npm run dev para iniciar o servidor de desenvolvimento.
6.	O projeto estará disponível em http://localhost:3000 no seu navegador.
Considerações finais
O projeto Project-Ensinio foi desenvolvido para oferecer uma experiência interativa aos usuários, permitindo que eles escolham o idioma de exibição das informações dos cards. Utilizando tecnologias como Vite.js, Axios, JSON Server e Styled Components, o projeto demonstra como criar uma seção hero dinâmica e responsiva em um aplicativo web.

