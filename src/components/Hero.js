import React from "react";
import styled from "styled-components";
import hero from "../images/hero.png";
// import { Select, MenuItem, FormControl } from "@material-ui/core";
const Container = styled.div`
  width: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background: url(${hero});
  object-fit: contain;
  padding: 100px 0;
`;
const Wraper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  @media only screen and (max-width: 799px) {
    flex-direction: column;
  }
`;
const HeroItem = styled.div`
  text-align: center;
  flex: 45%;
  flex-grow: 0;
  flex-shrink: 0;
  margin: 10px 20px 0;
`;
const HeroItemCard = styled.div`
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.3);
  width: 90%;
  background-color: white;
  color: rgba(50, 162, 209, 1);
  padding: 20px;
`;
const HeroItemCardTitle = styled.h1`
  font-size: 65px;
  font-weight: bolder;
  @media only screen and (max-width: 799px) {
    font-size: 32px;
  }
  @media only screen and (max-width: 319px) {
    font-size: 24px;
  }
`;
const HeroItemCardinfo = styled.h4`
  font-size: 16px;
`;
const HeroItemCardForm = styled.div`
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.3);
  width: 100%;
  background: rgba(36, 132, 172, 1);
  color: rgba(36, 132, 172, 1);
  padding: 20px 20px;
  color: white;
`;
const HeroItemCardFormTitle = styled.h2`
  font-size: 24px;
  font-weight: 500;
`;
const HeroItemCardFormdesc = styled.h4`
  font-size: 11px;
`;
const HeroItemCardFormInfo = styled.div`
  margin: 40px 0;
`;
const FullName = styled.input.attrs({ type: "text" })`
  width: 100%;
  margin: 7px;
  height: 40px;
  border: none;
`;
const Email = styled.input.attrs({ type: "email" })`
  width: 100%;
  margin: 7px;
  height: 40px;
  border: none;
`;
const Password = styled.input.attrs({ type: "password" })`
  width: 100%;
  margin: 7px;
  height: 40px;
  border: none;
`;
const Submit = styled.input.attrs({ type: "submit" })`
  width: 100%;
  margin: 7px;
  height: 40px;
  border: none;
  background: rgba(50, 162, 209, 1);
  margin-bottom: 30px;
`;
const Select = styled.select`
  width: 100%;
  margin: 7px;
  height: 40px;
  border: none;
`;
const HeroItemCardFormInput = styled.div`
  text-align: center;
`;
const GenderLabel = styled.label`
  text-align: center;
  margin: 0 10px;
`;
const GenderRadio = styled.input.attrs({ type: "radio", name: "gender" })`
  margin: 0 5px;
  cursor: pointer;
`;
const Option = styled.option``;

const Hero = () => {
  return (
    <Container>
      <Wraper>
        <HeroItem>
          <HeroItemCard>
            <HeroItemCardTitle>Upskill Today!</HeroItemCardTitle>
            <HeroItemCardinfo>
              Take your career to the next level
            </HeroItemCardinfo>
          </HeroItemCard>
        </HeroItem>
        <HeroItem>
          <HeroItemCardForm>
            <HeroItemCardFormInfo>
              <HeroItemCardFormTitle>
                Join the Zuri internship now!
              </HeroItemCardFormTitle>
              <HeroItemCardFormdesc>
                Registrations are ongoining. Complete the form below
              </HeroItemCardFormdesc>
            </HeroItemCardFormInfo>
            <HeroItemCardFormInput>
              <FullName />
              <Email />
              <Password />
              <Select>
                <Option>Front-end</Option>
                <Option>Back-end</Option>
                <Option>Ui/Ux design</Option>
              </Select>
              <GenderLabel>I am a </GenderLabel>
              <GenderLabel>Female </GenderLabel>
              <GenderRadio />
              <GenderLabel>Male </GenderLabel>
              <GenderRadio />
              <Submit />
            </HeroItemCardFormInput>
          </HeroItemCardForm>
        </HeroItem>
      </Wraper>
    </Container>
  );
};

export default Hero;
