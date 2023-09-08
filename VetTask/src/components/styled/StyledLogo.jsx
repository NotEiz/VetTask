import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
export const Logo = styled.h1`
          margin: 0;
          font-size: 2rem;
          color: orange;
          cursor: pointer;
`

const StyledLogo = () => {
  const navigate = useNavigate()
  return (
    <Logo onClick={() => navigate('/')}>vetbee</Logo>
  )
}

export default StyledLogo