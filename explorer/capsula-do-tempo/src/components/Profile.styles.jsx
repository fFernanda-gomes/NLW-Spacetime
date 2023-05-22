import styled from 'styled-components'
import bgleft from '../assets/bg-left.svg'

export const AsideContainer = styled.aside`
  @keyframes entering {
    from {
      opacity: 0;
      transform: translateY(-200px);
    }
    to {
      transform: translateY(0);
    }
  }
  
  * {
    animation: entering 0.7s ease-in-out;
  }

  grid-area: profile;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.15rem;

  border-right: 1px solid;
  border-image: linear-gradient(#727275, #2c2c31) 1;

  background-image: url(${bgleft});
  background-position: top right;
  background-repeat: no-repeat;
  background-size: auto 100%;

  img:nth-child(2) {
    width: 10rem;
    height: 10rem;
    border-radius: 50%;

    border: 4px solid transparent;
    background: 
      linear-gradient(#d39e33, #ed5636, #633bbc) padding-box,
      linear-gradient(260deg, #d39e33, #ed5636, #633bbc) border-box
    ;
  }

  p {
    font-size: 2rem;
    text-align: center;
  }

  span {
    font-size: 0.75rem;
    color: #9e9ea0;
  }

  @media (max-width: 768px) {
    border-right: none;
    padding: 2rem 0.75rem;
  }
`