import React, { View } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./mysa.scss";
import { Button } from "react-bootstrap";
import { Box, Container, Row, Column, HeaderLink } from "./Headerstyles.js";

const Header = () => {
  return (
    <Box className="mainHeading">
      <Container>
        <Row>
          <Column>
            <HeaderLink href="#">Home</HeaderLink>
          </Column>
          <Column>
            <HeaderLink href="#">Who We Are</HeaderLink>
          </Column>
          <Column>
            <HeaderLink href="#">Mentorship</HeaderLink>
          </Column>
          <Column>
            <HeaderLink href="#">Donors</HeaderLink>
          </Column>
        </Row>
      </Container>
      <h6
        style={{ color: "white", textAlign: "absolute", marginTop: "-100px" }}
      >
        CAREER SAATHI PROGRAM
      </h6>
      <h1
        style={{
          color: "white",
          textAlign: "left",
          size: "72px",
          fontWeight: "bold",
          fontSize: "72px",
          lineHeight: "144.5%",
          letterSpacing: "0.04em",
        }}
      >
        Career Acceleration Platform <br />
        For World-Beating Yet <br />
        <span style={{ color: "#8b93aa" }}>Under</span> Privileged Students
      </h1>
      <Button
        variant="default"
        style={{ color: "#F8F9FF", background: "#EF2A82" }}
      >
        Donate Now
      </Button>
    </Box>
  );
};

export default Header;
