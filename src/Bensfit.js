import styled from "styled-components";

const Container = styled.div`
  width: min(70%, 70.2vw);
  margin: auto;
  margin-top: 30px;
  text-align: center;
`;
const Benefits = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const Benefit = styled.div`
  flex: 40%;
  margin: 20px 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const BenefitContent = styled.p`
  max-width: 300px;
  min-width: 250px;
  text-align: justify;
  padding: 10px;
`;
const Heading = styled.h2`
  text-align: center;
  font-weight: 500;
`;
const Title = styled.h3`
  font-weight: 400;
  margin: 15px 0;
  color: rgba(50, 162, 209, 1);
  text-align: left;
`;

const Bensfit = () => {
  return (
    <Container>
      <Heading>Internship Benefits</Heading>
      <Benefits>
        <Benefit>
          <Title>Learn remotely</Title>
          <BenefitContent>
            Our aim is to help everyone willing to kick-start a career in tech
            without distance being a barrier.{" "}
          </BenefitContent>
        </Benefit>
        <Benefit>
          <Title> Network with interns</Title>
          <BenefitContent>
            Build a network of friends and colleague to collabotarate with on
            future projects.{" "}
          </BenefitContent>
        </Benefit>
        <Benefit>
          <Title> Mentorship</Title>
          <BenefitContent>
            We provide an avenue to work with various experienced mentors to
            help build your skills
          </BenefitContent>
        </Benefit>
        <Benefit>
          <Title> Get Certified</Title>
          <BenefitContent>
            Get Certified Learn, and get certified. We issue out certificates to
            finalists; something to boost your CV when you job hunt
          </BenefitContent>
        </Benefit>
      </Benefits>
    </Container>
  );
};

export default Bensfit;
