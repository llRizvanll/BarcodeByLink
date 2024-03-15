// BarcodeGenerator.js
import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const StyledInput = styled.input`
  padding: 10px;
  margin: 10px 0;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  border-color: #418af7;
  border-radius: 4px;
  width: 70%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const StyledButton = styled.button`
  background-color: #344854;
  color: #fff;
  padding: 10px 20px;
  margin: 10px 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 25%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const BarcodeGenerator = ({ link, setLink, generateBarcode }) => {
  const [error, setError] = useState("");

  const handleChange = (e) => {
    if (!e.target.value.trim()) {
      setError("Input cannot be empty");
    } else {
      setError("");
    }
    setLink(e.target.value);
  };
  return (
    <div
      style={{
        maxWidth: "50%",
        margin: "0 auto",
        "@media (max-width: 768px)": {
          maxWidth: "90%",
        },
      }}
    >
      <Container>
        <StyledInput
          type="text"
          value={link}
          onChange={handleChange}
          placeholder="Enter text or link to generate barcode"
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <StyledButton
          onClick={() => {
            if (!link.trim()) {
              setError("Input cannot be empty");
            } else {
              setError("");
              generateBarcode();
            }
          }}
          style={{ fontSize: "16px" }}
        >
          Instant Barcode Image
        </StyledButton>
      </Container>
    </div>
  );
};

export default BarcodeGenerator;
