const Values = {
  ENGLISH: "EN",
  PORTUGUESE: "PT",
  DARK: "dark",
  LIGHT: "light",
};

const Style = {
  [Values.DARK]: {
    backgroundColor: "#242424",
    textColor: "#FFFFFF",
    textColorOut: "#9B9999",
    hireMeHover: "#237e26",
    colorProgLangBrand: "#005F91",
    codeBoxBackground: "#545454",
  },
  [Values.LIGHT]: {
    backgroundColor: "white",
    textColor: "black",
    textColorOut: "#9B9999",
    hireMeHover: "#3bd640",
    colorProgLangBrand: "#005F91",
    codeBoxBackground: "#545454",
  },
};

const Lang = {
  [Values.ENGLISH]: {
    homeHome: "Home",
    homeAboutMe: "About Me",
    homeProjects: "Projects",
    homeHireMe: "Hire Me",
    homeIAm: "I am",
    homeComputerScientist: "Computer Scientist",
    homeDataScienceResearcher: "Data Science Researcher",
    homeAIEnthusiastic: "AI Enthusiastic",
    homeFullStackDev: "Full-Stack Dev",
    cppCode: `#include <iostream>
using namespace std;

int main() {
  string name = "Rafael Guimarães";  // Actually, my full name is way bigger than this.
  int age = 22;  // You know what, I’m still very young!
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
age = 22  # You know what, I’m still very young!
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
    int age = 22;  // You know what, I’m still very young!
    String hometown = "Piracanjuba, Goiás";  // Just a small town in the middle of Brazil.
    String college = "IF Goiano";  // My dear alma mater.
    String degree = "Bachelor's degree in Computer Science";  // Postgraduate coming soon.

    System.out.printf("Hello, my name is %s and I'm %d years old.%n", name, age);
    System.out.printf("I was born in %s, a small town in the hinterland of Brazil.%n", hometown);
    System.out.printf("Currently, I'm finishing my %s at %s, my alma mater.%n", degree, college);
    System.out.println("I'm very excited to have you here visiting my portfolio website!");
  }
}    `,
  },
  [Values.PORTUGUESE]: {
    homeHome: "Bem-vindo",
    homeAboutMe: "Sobre Mim",
    homeProjects: "Projetos",
    homeHireMe: "Me Contrate",
    homeIAm: "Eu sou um",
    homeComputerScientist: "Cientista da Computação",
    homeDataScienceResearcher: "Pesquisador em Ciência de Dados",
    homeAIEnthusiastic: "Entusiasta de IA",
    homeFullStackDev: "Dev Full-Stack",
    cppCode: `#include <iostream>
  using namespace std;
  
  int main() {
      string nome = "Rafael Guimarães";  // Na verdade, meu nome completo é bem maior do que isso.
      int idade = 22;  // Sabe de uma coisa, ainda sou muito jovem!
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
idade = 22  # Sabe de uma coisa, ainda sou muito jovem!
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
    int idade = 22;  // Sabe de uma coisa, ainda sou muito jovem!
    String cidadeNatal = "Piracanjuba, Goiás";  // Uma pequena cidade no interior do Brasil.
    String faculdade = "IF Goiano";  // Minha querida alma mater.
    String curso = "Bacharelado em Ciência da Computação";  // Pós-graduação chegando em breve.

    System.out.printf("Olá, meu nome é %s e tenho %d anos de idade.%n", nome, idade);
    System.out.printf("Minha cidade natal é %s, uma pequena cidade no interior do Brasil.%n", cidadeNatal);
    System.out.printf("Atualmente, estou finalizando o curso de %s no %s, minha alma mater.%n", curso, faculdade);
    System.out.println("Estou muito feliz em ter você aqui visitando meu portfólio!");
  }
}    `,
  },
};

export { Values, Style, Lang };
