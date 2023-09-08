import { NavBarItems } from "../Routes/Routes";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from './styled/StyledLogo';
const TopBar = styled.header`
     display: flex;
     justify-content: space-between;
     align-items: center;
     padding: 0.7rem 2rem;
     border-bottom: 1px solid lightgray;

     .navItem{
          text-decoration: none;
          color: orange;

          &:hover{
               text-decoration: underline;
          }
     }
`;
const Nav = styled.nav`
  display: flex;
  gap: 10px;
`;

const Header = () => {
  return (
    <TopBar>
     <Logo>vetbee</Logo>
     <Nav>
     {NavBarItems.map((navItem) => (
          <Link 
          key={navItem.path}
          to={navItem.path}
          className="navItem"
          >
               {navItem.title}
          </Link>
     ))}
     </Nav>
    </TopBar>
  );
};

export default Header;