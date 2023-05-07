![GitHub](https://img.shields.io/github/license/marcelofilipov/filipovOrgsCesta) ![GitHub repo size](https://img.shields.io/github/repo-size/marcelofilipov/filipovOrgsCesta) ![Snyk Vulnerabilities for GitHub Repo](https://img.shields.io/snyk/vulnerabilities/github/marcelofilipov/filipovOrgsCesta)

# Orgs-Cesta

## Projeto

Este projeto é resultado do treinamento em **React Native** realizado na [Alura](https://www.alura.com.br/).
Basicamente é implementada uma tela de detalhes da cesta do e-commerce _orgs_. Nesta tela são mostrados dados estáticos do nome da cesta, fazenda, preço e itens da cesta.

<img src="https://user-images.githubusercontent.com/9091491/123982988-e3ccb700-d999-11eb-880e-872881ee8b10.gif" width="350" />

## Técnicas e Tecnologias

As técnicas e tecnologias utilizadas no projeto são:

- `React Native CLI`: Trabalhando com nativo
- `Componentes React Native`: componentes já existentes básicos da tecnologia para compor a tela
  - `Text`: componente para exibir textos
  - `View`: container para blocos de componentes
  - `ScrollView`: container para blocos de componentes com barra de rolagem
  - `Image`: componente para exibir imagens
  - `TouchableOpacity`: componente para criar áreas clicáveis
- `Componentes customizados`: criação e utilização de componentes customizados
- `Suporte a telas`: não permitir que conteúdos estejam sob a _StatusBar_ (barra superior nativa) ou barra de gestos do iPhone
- `StyleSheet`: estilização básica de componentes
- `Dimensions`: captura de dados das dimenções da tela

## Executando o projeto

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) necessário para podermos rodar `npm` ou `npx`;
Um simulador Android ou iOS no computador;
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

Com o `npm` instalado podemos clonar o projeto.

### Clonando o projeto

Para ter acesso aos arquivos do projeto você pode clonar usando o seguinte comando:

```bash
# Fazer o clone do projeto que se encontra no repositório
$ git clone https://github.com/marcelofilipov/filipovOrgsCesta.git
```

### Rodando o Projeto

Agora que já tem a pasta do projeto na sua máquina, dentro dela instale as dependências:

```bash
# Instale as dependências
$ yarn install
```

Então podemos rodar o projeto:

```bash
# Iniciando a aplicação
$ npx react-native start
```

Se tiver um simulador, clique na opção do sistema operacional do seu simulador no menu esquerdo.

Pronto! Sua aplicação se encontra em execução.
