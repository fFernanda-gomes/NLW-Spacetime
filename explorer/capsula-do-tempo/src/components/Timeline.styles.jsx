import styled from 'styled-components'

export const TimelineContainer = styled.a`
  @keyframes entering {
    from {
      opacity: 0;
      transform: translateY(-200px);
    }
    to {
      transform: translateY(0);
    }
  }

  display: flex;
  flex-direction: column;
  gap: 1rem;

  text-decoration: none;
  margin-bottom: 4rem;

  small {
    color: #bebebf;
    font-size: 0.75rem;
  }

  h1 {
    font-size: 2rem;
    color: #eaeaea;
  }

  img {
    width: 100%;
    height: 17.5rem;
    object-fit: cover;
    border-radius: 8px;

    transition: transform 0.3s ease-in-out;
  }

  div {
    width: 100%;
    height: 200px;
    overflow: hidden;
    border-radius: 8px;
  }

  :hover img {
    transform: scale(1.1);
  }

  p {
    font-size: 1.125rem;
    color: #bebebf;
    line-height: 1.75rem;
  }
`

export const NavContainer = styled.nav `
  padding: 4rem;
  grid-area: timeline;

  //quando o conteudo não caber na vertival, habilita-se o scroll  
  overflow-y: scroll;
  animation: entering 0.7s ease-in-out;

  @media (max-width: 768px) {
    overflow-y: visible;
    padding: 1.375rem;
  }
`

/*
  hover --> mudar quando o mouse esta em cima

  zoom --> div -- image na div
    
  keyFrame --> é uma ferramenta/recurso, que controla as etapas em uma sequência de animação CSS,
   definindo os estilos para quadros-chave(pontos chave)
    ex:
      tem um quadrado q ta do lado esquerdo e quer-se fazer uma animação para ele
      ir do outro lado da tela
*/