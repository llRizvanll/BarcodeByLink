// Footer.js
import React from "react";
import { Navbar, Container } from "react-bootstrap";

const Footer = () => {
  return (
    <Navbar
      fixed="bottom"
      style={{
        backgroundColor: "#418AF7",
        minHeight: "64px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
      }}
    >
      <Container>
        <Navbar.Text
          style={{
            color: "#fff",
            fontWeight: "bold",
            width: "100%",
            textAlign: "center",
            fontSize: "18px",
            letterSpacing: "1px",
            padding: "10px",
          }}
        >
          © 2024 Barcode By Link - Rizvan
        </Navbar.Text>
      </Container>
    </Navbar>
  );
};

export default Footer;
