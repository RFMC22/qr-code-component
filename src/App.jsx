import styled from "@emotion/styled"
import { Qr, Text } from "./components"
import {data} from './data/text'
const Card = styled.div`
  width: 100%;
  max-width: 320px;
  height: 497px;
  background-color: var(--white);
  border-radius: 20px;
  box-shadow: 0px 25px 25px 0px rgba(0, 0, 0, 0.05);
  padding: 16px 16px 40px 16px;
`
function App() {
  return (
      <Card data-cy='card'>
        <Qr/>
        <Text data={data}/>
      </Card>
  )
}

export default App
