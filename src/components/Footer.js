import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
`;
const FooterInfo = styled.div`
  background: #3b3b3b;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
`;
const FooterInfoContent = styled.p`
  text-align: center;
  color: white;
  max-width: 400px;
  font-size: 24px;
  font-weight: 700;
`;
const FooterInfoContentBrand = styled.div`
  text-align: center;
  margin: 20px;
`;
const Button = styled.button`
  background: #32d0da;
  color: black;
  border: none;
  height: 30px;
  width: 100px;
  margin: 20px;
  padding: 0.5rem;
`;

const Footer = () => {
  return (
    <Container>
      <FooterInfo>
        <FooterInfoContent>
          Join the Zuri Internship now and kickstart your tech career
        </FooterInfoContent>
        <Button>Enroll Now!</Button>
      </FooterInfo>
      <FooterInfoContentBrand>
        © 2020 Zuri Internship. All Right Reserved
      </FooterInfoContentBrand>
    </Container>
  );
};

export default Footer;
