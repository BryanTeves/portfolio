import { createContext } from "react";

const ProjectsContext = createContext();

export const ProjectsProvider = function ({ children }) {
  const projects = [
    {
      id: 1,
      name: "color-generator",
      github: "https://github.com/BryanTeves/color-generator",
      site: "https://colorgenerator-bryan-teves.netlify.app/",
      img: "https://i.imgur.com/d6RCqTC.jpg",
      description:
        "I have made this project to test my JavaScript skills. I used only JS, without any framework. The main function of the color generator, like the name says, is to generate colors, beside that, you can put your own color and even copy the RGB code from the colors",
      descricao:
        "Eu fiz esse projeto com a intenção de testar as minhas habilidades em JavaScript. Eu usei apenas JS, sem nenhum framewok. O principal objetivo do color generator, como o próprio nome diz, é gerar cores, além disso, você consegue colocar suas próprias cores e também copiar o código RGB delas",
    },

    {
      id: 2,
      name: "league-wiki",
      github: "https://github.com/BryanTeves/league-wiki",
      site: "https://lol-wiki-bryan-teves.netlify.app/",
      img: "https://i.imgur.com/SwSGNsN.jpg",
      description:
        'This was my first React project. When I finished my React course, I realized that React is so GREAT to work with. With that in mind, I mixed up tow of my passions, games and program, so I thought "Why not make a League of legends wiki?", and it\'s how this project came alive. The main concept of the league-wiki is to bring all the infos of all the champions of League of Legends. I used React, Sass and the RIOT API (DataDragon) to bring this project out of paper',
      descricao:
        'Esse foi meu primeiro projeto feito com React. Quando eu finalizei meu curso de React, eu percebi o quao INCRÍVEL React é de trabalhar. Com isso em mente, eu misturei duas de minhas paixões, jogos e programação, então eu pensei "Por que não fazer uma wiki de League of Legends?", e foi assim que o projeto nasceu. O foco principal do league-wiki é trazer as informações de todos os campeões do League of Legends. Nele eu sei React, Sass e a API da RIOT (DataDragon) para tirar o projeto do papel',
    },
  ];

  return (
    <ProjectsContext.Provider value={{ projects }}>
      {children}
    </ProjectsContext.Provider>
  );
};

export default ProjectsContext;
