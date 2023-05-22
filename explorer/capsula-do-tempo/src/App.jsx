import { GlobalStyle } from "./styles/Global"
import { Timeline } from "./components/Timeline"
import { Profile } from "./components/Profile"

export function App() {
  return (
    <>
      <Profile />
      
      <Timeline />
      <GlobalStyle />
    </>
  )
}