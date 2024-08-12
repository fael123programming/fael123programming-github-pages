import { getAge } from "./Algorithms";

const Values = {
  ENGLISH: "EN",
  PORTUGUESE: "PT",
  DARK: "dark",
  LIGHT: "light",
  HOME: "home",
  ABOUT_ME: "about me",
  PROJECTS: "projects",
};

const Style = {
  [Values.DARK]: {
    backgroundColor: "#242424",
    textColor: "#FFFFFF",
    textColorOut: "#9B9999",
    hireMeHover: "#237e26",
    colorProgLangBrand: "#005F91",
    codeBoxBackground: "#545454",
    carouselBackground: "#2b2b2b",
  },
  [Values.LIGHT]: {
    backgroundColor: "white",
    textColor: "black",
    textColorOut: "#9B9999",
    hireMeHover: "#3bd640",
    colorProgLangBrand: "#005F91",
    codeBoxBackground: "#545454",
    carouselBackground: "white",
  },
};

const Lang = {
  [Values.ENGLISH]: {
    copyright: 'All rights reserved for fael123programming',
    homeHome: "Home",
    homeAboutMe: "About Me",
    homeProjects: "Projects",
    homeHireMe: "Hire Me",
    homeIAm: "I am",
    homeComputerScientist: "Computer Scientist",
    homeDataScienceResearcher: "Data Science Researcher",
    homeAIEnthusiastic: "AI Enthusiastic",
    homeFullStackDev: "Full-Stack Dev",
    cCode: `#include <stdio.h>

int main(int argc, char* argv[]) {
  char* name = "Rafael Guimarães";  // Actually, my full name is way bigger than this.
  int age = ${getAge()};  // You know what, I’m still very young!
  char* hometown = "Piracanjuba, Goiás";  // Just a small town in the middle of Brazil.
  char* college = "IF Goiano";  // My dear alma mater.
  char* degree = "Bachelor's degree in Computer Science";  // Postgraduate coming soon.

  printf("Hello, my name is %s and I'm %d years old.\\n", name, age);
  printf("I was born in %s, a small town in the hinterland of Brazil.\\n", hometown);
  printf("Currently, I'm finishing my %s at %s, my alma mater.\\n", degree, college);
  printf("I'm very excited to have you here visiting my portfolio website!\\n");

  return 0;
}
`,
    cppCode: `#include <iostream>

using namespace std;

int main() {
  string name = "Rafael Guimarães";  // Actually, my full name is way bigger than this.
  int age = ${getAge()};  // You know what, I’m still very young!
  string hometown = "Piracanjuba, Goiás";  // Just a small town in the middle of Brazil.
  string college = "IF Goiano";  // My dear alma mater.
  string degree = "Bachelor's degree in Computer Science";  // Postgraduate coming soon.

  cout << "Hello, my name is " << name << " and I'm " << age << " years old.\\n";
  cout << "I was born in " << hometown << ", a small town in the hinterland of Brazil.\\n";
  cout << "Currently, I'm finishing my " << degree << " at " << college << ", my alma mater.\\n";
  cout << "I'm very excited to have you here visiting my portfolio website!\\n";

  return 0;
}`,
    pythonCode: `name = 'Rafael Guimarães'  # Actually, my full name is way bigger than this.
age = ${getAge()}  # You know what, I’m still very young!
hometown = 'Piracanjuba, Goiás'  # Just a small town in the middle of Brazil.
college = 'IF Goiano'  # My dear alma mater.
degree = 'Bachelor\\'s degree in Computer Science'  # Postgraduate coming soon.

print(f'Hello, my name is {name} and I\\'m {age} years old.')
print(f'I was born in {hometown}, a small town in the hinderland of Brazil.')
print(f'Currently, I\\'m finishing my {degree} at {college}, my alma mater.')
print('I\\'m very excited to have you here visiting my portfolio website!')
`,
    javaCode: `package my.portfolio.website;

public class PortfolioWebsite {
  public static void main(String[] args) {
    String name = "Rafael Guimarães";  // Actually, my full name is way bigger than this.
    int age = ${getAge()};  // You know what, I’m still very young!
    String hometown = "Piracanjuba, Goiás";  // Just a small town in the middle of Brazil.
    String college = "IF Goiano";  // My dear alma mater.
    String degree = "Bachelor's degree in Computer Science";  // Postgraduate coming soon.

    System.out.printf("Hello, my name is %s and I'm %d years old.%n", name, age);
    System.out.printf("I was born in %s, a small town in the hinterland of Brazil.%n", hometown);
    System.out.printf("Currently, I'm finishing my %s at %s, my alma mater.%n", degree, college);
    System.out.println("I'm very excited to have you here visiting my portfolio website!");
  }
}    `,
    dartCode: `void main() {
  String name = "Rafael Guimarães";  // Actually, my full name is way bigger than this.
  int age = ${getAge()};  // You know what, I’m still very young!
  String hometown = "Piracanjuba, Goiás";  // Just a small town in the middle of Brazil.
  String college = "IF Goiano";  // My dear alma mater.
  String degree = "Bachelor's degree in Computer Science";  // Postgraduate coming soon.

  print("Hello, my name is $name and I'm $age years old.");
  print("I was born in $hometown, a small town in the hinterland of Brazil.");
  print("Currently, I'm finishing my $degree at $college, my alma mater.");
  print("I'm very excited to have you here visiting my portfolio website!");
}
`,
    jsCode: `function main() {
  let name = "Rafael Guimarães";  // Actually, my full name is way bigger than this.
  let age = ${getAge()};  // You know what, I’m still very young!
  let hometown = "Piracanjuba, Goiás";  // Just a small town in the middle of Brazil.
  let college = "IF Goiano";  // My dear alma mater.
  let degree = "Bachelor's degree in Computer Science";  // Postgraduate coming soon.

  console.log(\`Hello, my name is \${name} and I'm \${age} years old.\`);
  console.log(\`I was born in \${hometown}, a small town in the hinterland of Brazil.\`);
  console.log(\`Currently, I'm finishing my \${degree} at \${college}, my alma mater.\`);
  console.log(\`I'm very excited to have you here visiting my portfolio website!\`);
}

main();
`,
    aboutAboutMe: "About Me",
    aboutAboutMeDescription:
      "I am a Brazilian software engineer with a degree in Computer Science (IF Goiano) and specialized in Full-Stack development.",
    aboutAboutMePortugal:
      "In the first half of 2023, I was awarded a scholarship to study in Bragança, Portugal, due to my high Grade Point Average (GPA). During the six-month program, I studied disciplines such as Cross-Platform Development and Embedded Systems.",
    projectsProjects: "Projects",
    projectsProjectsCarousel: [
      {
        title: "My Financial Control",
        description:
          "Track your spending effortlessly with my personal expenses monitoring app. Manage your finances with ease, set budgets, and view detailed reports. Plus, with our admin version, you can control general settings and ensure a seamless experience for all users.",
      },
      {
        title: "My Tanning",
        description:
          "Manage your tanning business effortlessly with my app! Schedule and time tanning sessions, receive notifications for position changes, record customer histories, and access a comprehensive dashboard with business insights. Plus, send pre-defined messages to clients via WhatsApp with a single click.",
      },
      {
        title: "JunTOs Therapeutic Metaverses Quiz",
        description:
          "JunTOs is a São Paulo-based startup uniting psychologists and computer scientists to create impactful software. One of their products is a web and mobile app for mental health assessment and support, featuring WHOQOL-based questionnaires and AI chat assistance. This project, part of the Conecta Startups initiative funded by the Brazilian government, is developed in collaboration with Hospital Dona Helena.",
      },
      {
        title: "AutisTools - Preference Item Assessment (PIA)",
        description:
          "AutisTools by JunTOs Therapeutic Metaverses is an engaging and accessible preference assessment game for autistic kids. Players choose their favorite objects from pairs of cards displayed on the screen, with audio-guided pages enhancing usability. After numerous selections, the game presents a table ranking their most loved items. Fun and insightful, it's designed to help understand and support each child's unique preferences.",
      },
      {
        title: "Journalists' Utility",
        description:
          "A sophisticated web application designed for journalists of Instituto Federal Goiano. This app enables users to input their publication texts and receive detailed sentiment analysis powered by the Transformers (Hugging Face) BERT model, developed by Google.  Additionally, the app offers text summarization using the advanced Transformers (Hugging Face) BART model, developed by Meta, providing concise and coherent summaries of the original content. This innovative tool enhances journalistic efficiency and insight by leveraging state-of-the-art AI technology.",
      },
      {
        title: "pycmdmovie",
        description:
          "Introducing pycmdmovie, a Python library that transforms images and videos into stunning ASCII art, all rendered in your terminal using OpenGL. Each pixel from the original image is converted to grey-scale and then mapped to a corresponding terminal character, such as asterisks and dots, based on its shading. With pycmdmovie, it's even possible to create a cinema within your terminal, offering a unique and captivating visual experience. Dive into the world of ASCII art and bring your terminal to life like never before!",
      },
    ],
    projectsMoreAbout: "More About",
  },
  [Values.PORTUGUESE]: {
    copyright: "Todos os direitos reservados para fael123programming",
    homeHome: "Bem-vindo",
    homeAboutMe: "Sobre Mim",
    homeProjects: "Projetos",
    homeHireMe: "Me Contrate",
    homeIAm: "Eu sou",
    homeComputerScientist: "Cientista da Computação",
    homeDataScienceResearcher: "Pesquisador em Ciência de Dados",
    homeAIEnthusiastic: "Entusiasta de IA",
    homeFullStackDev: "Dev Full-Stack",
    cCode: `#include <stdio.h>

int main(int argc, char* argv[]) {
  char* nome = "Rafael Guimarães";  // Na verdade, meu nome completo é bem maior do que isso.
  int idade = ${getAge()};  // Sabe de uma coisa, ainda sou muito jovem!
  char* cidadeNatal = "Piracanjuba, Goiás";  // Uma pequena cidade no interior do Brasil.
  char* faculdade = "IF Goiano";  // Minha querida alma mater.
  char* curso = "Bacharelado em Ciência da Computação";  // Pós-graduação chegando em breve.

  printf("Olá, meu nome é %s e tenho %d anos de idade.\\n", nome, idade);
  printf("Minha cidade natal é %s, uma pequena cidade no interior do Brasil.\\n", cidadeNatal);
  printf("Atualmente, estou finalizando o curso de %s no %s, minha alma mater.\\n", curso, faculdade);
  printf("Estou muito feliz em ter você aqui visitando meu portfólio!\\n");

  return 0;
}
`,
    cppCode: `#include <iostream>
using namespace std;

int main() {
  string nome = "Rafael Guimarães";  // Na verdade, meu nome completo é bem maior do que isso.
  int idade = ${getAge()};  // Sabe de uma coisa, ainda sou muito jovem!
  string cidadeNatal = "Piracanjuba, Goiás";  // Uma pequena cidade no interior do Brasil.
  string faculdade = "IF Goiano";  // Minha querida alma mater.
  string curso = "Bacharelado em Ciência da Computação";  // Pós-graduação chegando em breve.

  cout << "Olá, meu nome é " << nome << " e tenho " << idade << " anos de idade.\\n";
  cout << "Minha cidade natal é " << cidadeNatal << ", uma pequena cidade no interior do Brasil.\\n";
  cout << "Atualmente, estou finalizando o curso de " << curso << " no " << faculdade << ", minha alma mater.\\n";
  cout << "Estou muito feliz em ter você aqui visitando meu portfólio!\\n";

  return 0;
}`,
    pythonCode: `nome = 'Rafael Guimarães'  # Na verdade, meu nome completo é bem maior do que isso.
idade = ${getAge()}  # Sabe de uma coisa, ainda sou muito jovem!
cidade_natal = 'Piracanjuba, Goiás'  # Uma pequena cidade no interior do Brasil.
faculdade = 'IF Goiano'  # Minha querida alma mater.
curso = 'Bacharelado em Ciência da Computação'  # Pós-graduação chegando em breve.

print(f'Olá, meu nome é {nome} e tenho {idade} anos de idade.')
print(f'Minha cidade natal é {cidade_natal}, uma pequena cidade no interior do Brasil.')
print(f'Atualmente, estou finalizando o curso de {curso} no {faculdade}, minha alma mater.')
print('Estou muito feliz em ter você aqui visitando meu portfólio!')
`,
    javaCode: `package my.portfolio.website;

public class PortfolioWebsite {
  public static void main(String[] args) {
    String nome = "Rafael Guimarães";  // Na verdade, meu nome completo é bem maior do que isso.
    int idade = ${getAge()};  // Sabe de uma coisa, ainda sou muito jovem!
    String cidadeNatal = "Piracanjuba, Goiás";  // Uma pequena cidade no interior do Brasil.
    String faculdade = "IF Goiano";  // Minha querida alma mater.
    String curso = "Bacharelado em Ciência da Computação";  // Pós-graduação chegando em breve.

    System.out.printf("Olá, meu nome é %s e tenho %d anos de idade.%n", nome, idade);
    System.out.printf("Minha cidade natal é %s, uma pequena cidade no interior do Brasil.%n", cidadeNatal);
    System.out.printf("Atualmente, estou finalizando o curso de %s no %s, minha alma mater.%n", curso, faculdade);
    System.out.println("Estou muito feliz em ter você aqui visitando meu portfólio!");
  }
}    `,
    dartCode: `void main() {
  String nome = "Rafael Guimarães";  // Na verdade, meu nome completo é bem maior do que isso.
  int idade = ${getAge()};  // Sabe de uma coisa, ainda sou muito jovem!
  String cidadeNatal = "Piracanjuba, Goiás";  // Uma pequena cidade no interior do Brasil.
  String faculdade = "IF Goiano";  // Minha querida alma mater.
  String curso = "Bacharelado em Ciência da Computação";  // Pós-graduação chegando em breve.

  print("Olá, meu nome é $name e tenho $idade anos de idade.");
  print("Minha cidade natal é $cidadeNatal, uma pequena cidade no interior do Brasil.");
  print("Atualmente, estou finalizando o curso de $curso no $faculdade, minha alma mater.");
  print("Estou muito feliz em ter você aqui visitando meu portfólio!");
}
`,
    jsCode: `function main() {
  let nome = "Rafael Guimarães";  // Na verdade, meu nome completo é bem maior do que isso.
  let idade = ${getAge()};  // Sabe de uma coisa, ainda sou muito jovem!
  let cidadeNatal = "Piracanjuba, Goiás";  // Uma pequena cidade no interior do Brasil.
  let faculdade = "IF Goiano";  // Minha querida alma mater.
  let curso = "Bachelor's degree in Computer Science";  // Pós-graduação chegando em breve.

  console.log(\`Olá, meu nome é \${nome} e tenho \${idade} anos de idade.\`);
  console.log(\`Minha cidade natal é \${cidadeNatal}, uma pequena cidade no interior do Brasil.\`);
  console.log(\`Atualmente, estou finalizando o curso de \${curso} no \${faculdade}, minha alma mater.\`);
  console.log(\`Estou muito feliz em ter você aqui visitando meu portfólio!\`);
}

main();
`,
    aboutAboutMe: "Sobre Mim",
    aboutAboutMeDescription:
      "Eu sou um engenheiro de software Brasileiro, bacharel em Ciência da Computação (IF Goiano) e especializado em desenvolvimento Full-Stack.",
    aboutAboutMePortugal:
      "Na primeira metade de 2023, fui contemplado com uma bolsa de estudos para estudar em Bragança, Portugal, devido ao meu alto Coeficiente de Rendimento (CR). Durante o programa de seis meses, estudei disciplinas como Desenvolvimento Multiplataforma e Sistemas Embarcados.",
    projectsProjects: "Projetos",
    projectsProjectsCarousel: [
      {
        title: "Meu Controle Financeiro",
        description:
          "Acompanhe seus gastos sem esforço com meu aplicativo de monitoramento de despesas pessoais. Gerencie suas finanças com facilidade, defina orçamentos e visualize relatórios detalhados. Além disso, com nossa versão para administradores, você pode controlar as configurações gerais e garantir uma experiência perfeita para todos os usuários.",
      },
      {
        title: "Meu Bronze",
        description:
          "Gerencie seu negócio de bronzeamento sem esforço com meu aplicativo! Agende e cronometre sessões de bronzeamento, receba notificações para mudanças de posição, registre o histórico dos clientes e acesse um painel abrangente com insights do negócio. Além disso, envie mensagens pré-definidas para os clientes via WhatsApp com um único clique.",
      },
      {
        title: "Quiz JunTOs Metaversos Terapêuticos",
        description:
          "A JunTOs é uma startup baseada em São Paulo que une psicólogos e cientistas da computação para criar software impactante. Um de seus produtos é um aplicativo web e móvel para avaliação e suporte em saúde mental, com questionários baseados no WHOQOL e assistência por chat com IA. Este projeto, parte da iniciativa Conecta Startups financiada pelo governo brasileiro, é desenvolvido em colaboração com o Hospital Dona Helena.",
      },
      {
        title: "AutisTools - Avaliação de Item de Preferência (AIP)",
        description:
          "O AutisTools da JunTOs Therapeutic Metaverses é um jogo envolvente e acessível de avaliação de preferências para crianças autistas. Os jogadores escolhem seus objetos favoritos a partir de pares de cartas exibidas na tela, com páginas guiadas por áudio para aumentar a usabilidade. Após várias seleções, o jogo apresenta uma tabela classificando os itens mais apreciados. Divertido e perspicaz, é projetado para ajudar a entender e apoiar as preferências únicas de cada criança.",
      },
      {
        title: "Ferramenta para Jornalistas",
        description:
          "Uma sofisticada aplicação web projetada para jornalistas do Instituto Federal Goiano. Este aplicativo permite que os usuários insiram seus textos de publicações e recebam análises detalhadas de sentimento, impulsionadas pelo modelo Transformers (Hugging Face) BERT, desenvolvido pelo Google. Além disso, o aplicativo oferece a sumarização de textos utilizando o avançado modelo Transformers (Hugging Face) BART, desenvolvido pela Meta, fornecendo resumos concisos e coerentes do conteúdo original. Esta ferramenta inovadora melhora a eficiência e a percepção jornalística, aproveitando a tecnologia de IA de ponta.",
      },
      {
        title: "pycmdmovie",
        description:
          "Apresentando o pycmdmovie, uma biblioteca Python que transforma imagens e vídeos em impressionantes obras de arte ASCII, todas renderizadas no seu terminal usando OpenGL. Cada pixel da imagem original é convertido para tons de cinza e mapeado para um caractere correspondente do terminal, como asteriscos e pontos, com base em sua sombra. Com o pycmdmovie, é até possível criar um cinema no seu terminal, oferecendo uma experiência visual única e cativante. Mergulhe no mundo da arte ASCII e dê vida ao seu terminal como nunca antes!",
      },
    ],
    projectsMoreAbout: "Mais Sobre",
  },
};

export { Values, Style, Lang };
