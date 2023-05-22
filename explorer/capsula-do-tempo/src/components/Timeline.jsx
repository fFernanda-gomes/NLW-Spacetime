import jornada from '../assets/jornada.png'
import { NavContainer, TimelineContainer } from './Timeline.styles'

export function Timeline() {
  return(
      <NavContainer >
        <TimelineContainer
          href='https://www.figma.com/file/Q32sEszdnYEb364eg5pYwa/C%C3%A1psula-do-tempo-%E2%80%A2-Trilha-Explorer-(Community)?type=design&node-id=352-8&t=t0SOhflO2WslQWCu-0' 
          target='_blank'
        >
          <small>20 de Março de 2023</small>
          <h1>Jornada do Zero à Primeira Vaga</h1>
          <div>
            <img src={jornada} alt="" />
          </div>
          <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique...</p>
        </TimelineContainer>

        <TimelineContainer 
          href='https://www.figma.com/file/Q32sEszdnYEb364eg5pYwa/C%C3%A1psula-do-tempo-%E2%80%A2-Trilha-Explorer-(Community)?type=design&node-id=352-8&t=t0SOhflO2WslQWCu-0' 
          target='_blank'
        >
          <small>20 de Março de 2023</small>
          <h1>Jornada do Zero à Primeira Vaga</h1>
          <div>
            <img src={jornada} alt="" />
          </div>
          <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique...</p>
        </TimelineContainer>  

        <TimelineContainer 
          href='https://www.figma.com/file/Q32sEszdnYEb364eg5pYwa/C%C3%A1psula-do-tempo-%E2%80%A2-Trilha-Explorer-(Community)?type=design&node-id=352-8&t=t0SOhflO2WslQWCu-0' 
          target='_blank'
        >
          <small>20 de Março de 2023</small>
          <h1>Jornada do Zero à Primeira Vaga</h1>
          <div>
            <img src={jornada} alt="" />
          </div>
          <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique...</p>
        </TimelineContainer>      
      </NavContainer>
  )
}