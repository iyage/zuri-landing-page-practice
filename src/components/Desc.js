import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  text-align: center;
`;
const InfoContainer = styled.h3`
  margin: 30px 0;
  max-width: 500px;
`;
const Desc = () => {
  return (
    <Container>
      <InfoContainer>
        We help everyone willing to kick-start a career in tech without distance
        being a barrier.
      </InfoContainer>
    </Container>
  );
};

export default Desc;
