import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  :root {
    font-size: 16px;
  }

  /*
  seletor Webkit --> mecanismo que permite que renderize e modifique os 
  elementos da aplicação
*/
  ::-webkit-scrollbar {
    width: 0.5rem;
  }

  ::-webkit-scrollbar-track {
    // o caminho por onde a barra percorre
    background-color: #2c2c31;
  }

  ::-webkit-scrollbar-thumb {
    //pedaço de barra que fica percorrendo
    background-color: #9e9ea0;
    border-radius: 8px;
  }

  body {
    background: #121215;
    color: #eaeaea;
  }

  #root {
    display: grid;
    grid-template-areas: "profile timeline";
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 100vh;
  }

  @media (max-width: 768px){
    :root {
      font-size: 14px;
    }

    #root {
      grid-template-columns: 1fr;
      grid-template-rows: 0.2fr 0.8fr;
      grid-template-areas: 
      "profile"
      "timeline";
    }
  }
` 