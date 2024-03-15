// BarcodeGenerator.js
import React from 'react';
import styled from 'styled-components';

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
  box-shadow: 0 0 8px rgba(0,0,0,0.2);
  border-color: #3f51b5;
  border-radius: 4px;
  width: 70%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const StyledButton = styled.button`
  background-color: #3f51b5;
  color: #fff;
  padding: 10px 20px;
  margin: 10px 0;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
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
  return (
    <div
      style={{
        maxWidth: "50%",
        margin: "0 auto",
        '@media (max-width: 768px)': {
          maxWidth: '90%',
        },
      }}
    >
      <Container>
        <StyledInput
          type="text"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          placeholder="Enter text or link to generate barcode"
        />

        <StyledButton onClick={generateBarcode}>
          Instant Barcode Image
        </StyledButton>
      </Container>
    </div>
  );
};

export default BarcodeGenerator;