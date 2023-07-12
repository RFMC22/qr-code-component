import styled from "@emotion/styled"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 129px;
  text-align: center;
  margin-top: 20px;
  & h1{
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: var(--dark-blue);
  }
  & p{
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.188px;
    color: var(--grayish-blue);
    padding: 0 9px;
  }
`
const Text = ({data}) => {
  const { title, text } = data
  return (
    <Container data-cy='footer'>
      <h1>{title}</h1>
      <p>{text}</p>
    </Container>
  )
}

export default Text