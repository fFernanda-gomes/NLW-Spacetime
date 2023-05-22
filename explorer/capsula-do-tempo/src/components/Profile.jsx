import logo from '../assets/logo.svg'
import { AsideContainer } from './Profile.styles'

export function Profile() {
  return(
    <AsideContainer>
      <img src={logo} alt="" />
      <img src="https://avatars.githubusercontent.com/u/102833721?v=4" alt="foto do perfil do github" />

      <p>
        Capsula do tempo de <br />
        <strong> Fernanda Gomes</strong>
      </p>

      <span>Feito com 💚 no NLW da Rocketseat</span>
    </AsideContainer>
  )
}