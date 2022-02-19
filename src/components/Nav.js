import styled from "styled-components";
import logo from "../images/logo.png";

const Container = styled.div`
  width: min(87%, 89vw);
  margin: auto;
`;
const NavBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 10px 0;
`;
const NavBarLeft = styled.div`
  flex: 40%;
`;
const ImageContainer = styled.div`
  width: 220px;
  height: 50px;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
`;
const NavBarRight = styled.div`
  flex: 40%;
`;
const NavBarRightItems = styled.ul`
  display: flex;
  justify-content: flex-end;
  list-style: none;
  flex-wrap: wrap;
`;
const NavBarRightItem = styled.li`
  display: 1;
  padding: 10px;
`;
const Nav = () => {
  return (
    <Container>
      <NavBar>
        <NavBarLeft>
          <ImageContainer>
            <Image src={logo} />
          </ImageContainer>
        </NavBarLeft>
        <NavBarRight>
          <NavBarRightItems>
            <NavBarRightItem>Home</NavBarRightItem>
            <NavBarRightItem>About</NavBarRightItem>
            <NavBarRightItem>Updates</NavBarRightItem>
            <NavBarRightItem>Join-Us</NavBarRightItem>
          </NavBarRightItems>
        </NavBarRight>
      </NavBar>
    </Container>
  );
};

export default Nav;
