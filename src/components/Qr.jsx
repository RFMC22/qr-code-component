import styled from '@emotion/styled'
import imgQR from '../assets/image-qr-code.png'
const Image = styled.img`
  width: 100%;
  border-radius: 10px;
`
const Qr = () => {
  return (
    <Image src={imgQR} alt='imagen con QR' data-cy='img'/>
  )
}

export default Qr