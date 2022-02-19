import styled from "styled-components";
import front_end_logo from "../images/Group3.png";
import back_end_logo from "../images/Group.png";
import product_design_logo from "../images/Group1.png";
import ux_logo from "../images/Group2.png";

const Container = styled.div`
  width: min(98%, 98.8vw);
  margin: auto;
`;
const CourseWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const Course = styled.div`
  flex: 20%;
  flex-grow: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 20px;
`;
const CourseItem = styled.div`
  flex: 100%;
`;
const SmallCircle = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: black;
  margin: 10px;
`;
const BigCircle = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: rgba(50, 162, 209, 1);
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ImageContainer = styled.div`
  width: 30px;
  height: 30px;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
`;
const Heading = styled.h3`
  font-weight: 300;
  font-size: 18px;
  text-align: center;
`;
const CourseBody = styled.p`
  margin: 15px 0;
  text-align: justify;
  max-width: 90%;
  min-width: 250px;
`;

const CourseSection = () => {
  return (
    <Container>
      <CourseWrapper>
        <Course>
          <CourseItem>
            <SmallCircle> </SmallCircle>
          </CourseItem>
          <CourseItem>
            <BigCircle>
              <ImageContainer>
                <Image src={front_end_logo} />
              </ImageContainer>
            </BigCircle>
          </CourseItem>
          <CourseItem>
            <Heading>Front-end Development</Heading>
            <CourseBody>
              Learn to build impresive webpages using HTML, CSS and JavaScript,
              with practical projects as you go!
            </CourseBody>
          </CourseItem>
        </Course>
        <Course>
          <CourseItem>
            <SmallCircle> </SmallCircle>
          </CourseItem>
          <CourseItem>
            <BigCircle>
              <ImageContainer>
                <Image src={back_end_logo} />
              </ImageContainer>
            </BigCircle>
          </CourseItem>
          <CourseItem>
            <Heading>Back-end Development</Heading>
            <CourseBody>
              Choose from either Php or python. Learn to create database
              structures and implement security on servers
            </CourseBody>
          </CourseItem>
        </Course>
        <Course>
          <CourseItem>
            <SmallCircle> </SmallCircle>
          </CourseItem>
          <CourseItem>
            <BigCircle>
              <ImageContainer>
                <Image src={product_design_logo} />
              </ImageContainer>
            </BigCircle>
          </CourseItem>
          <CourseItem>
            <Heading>Product Design</Heading>
            <CourseBody>
              Using Figma as a prototyping tool, learn the fundamentals of
              designing products that solves user painpoints
            </CourseBody>
          </CourseItem>
        </Course>
        <Course>
          <CourseItem>
            <SmallCircle> </SmallCircle>
          </CourseItem>
          <CourseItem>
            <BigCircle>
              <ImageContainer>
                <Image src={ux_logo} />
              </ImageContainer>
            </BigCircle>
          </CourseItem>
          <CourseItem>
            <Heading>Mobile Development</Heading>
            <CourseBody>
              Learn to use either java, kotlin or flutter to build mobile
              applications that solve real problems
            </CourseBody>
          </CourseItem>
        </Course>
      </CourseWrapper>
    </Container>
  );
};

export default CourseSection;
