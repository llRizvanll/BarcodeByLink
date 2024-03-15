// Header.js
import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar
      style={{
        backgroundColor: "#418AF7",
        minHeight: "64px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
      }}
      expand="lg"
    >
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Navbar.Brand
          style={{
            color: "#fff",
            fontWeight: "bold",
            padding: "20px",
            alignSelf: "flex-start",
            fontSize: "24px",
          }}
        >
          Instant Barcode Wizard
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
