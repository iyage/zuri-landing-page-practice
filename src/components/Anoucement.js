import { ChevronLeft, ChevronRight } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  color: white;
  flex-shrink: 0;
`;
const AnoucementLeft = styled.div`
  flex: 60%;
  background: #32a2d1;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 30px 10px;
  height: 40vh;
`;
const AnoucementRight = styled.div`
  flex: 40%;
  background: #3b3b3b;
  padding: 30px 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 40vh;
`;
const Title = styled.h3`
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`;
const Content = styled.p`
  text-align: justify;
  max-width: 90%;
  min-width: 260px;
`;
const Button = styled.button`
  border: none;
  background-color: transparent;
  padding: 0.4rem;
  color: white;
`;
const LinkWrapper = styled.div`
  color: white;
  margin: 20px 0;
  &::after {
    content: ">";
    font-size: 18px;
    font-weight: 900;
  }
`;
const Anoucement = () => {
  return (
    <Container>
      <AnoucementLeft>
        <Title>Ingressive for Good</Title>
        <Content>
          We exists to equip young Africans in need with tech skills to help
          them impact and contribute to the development of Africa. Ingressive
          For Good (I4G) was created to address the glaring inequities that
          exist within African tech ecosystems.
          <LinkWrapper>
            <Button>Learn more</Button>
          </LinkWrapper>
        </Content>
      </AnoucementLeft>
      <AnoucementRight>
        <Title>Zuri</Title>
        <Content>
          Our aim is to help everyone willing to kick-start a career in tech
          without distance being a barrier. Join one of the best remote learning
          opportunities in tech by signing up with us.
          <LinkWrapper>
            <Button>Learn more</Button>
          </LinkWrapper>
        </Content>
      </AnoucementRight>
    </Container>
  );
};

export default Anoucement;
