import styled from "styled-components";

export const Box = styled.div`
  padding: 80px 60px;
  height: 100%;
  padding-bottom: 0px;
  padding-left: 0px;
  background: #172755;
  position: bottom;
  bottom: 0;
  width: 100%;
  clip-path: polygon(0 calc(0% + 10vw), 100% 0, 100% 100%, 0% 100%);

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  /* background: red; */
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 120px;

  @media (max-width: 500px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const FooterLink = styled.a`
  color: #f8f9ff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;

  &:hover {
    color: #ef2a82;
    transition: 200ms ease-in;
  }
`;

export const Heading = styled.p`
  font-size: 24px;
  color: #f8f9ff;
  margin-bottom: 40px;
  width: 300px;
  height: auto;
  font-weight: bold;
`;
