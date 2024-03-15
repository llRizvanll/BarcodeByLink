import React, { useState } from "react";
import BWIPJS from "bwip-js";
import { Modal, Button } from "react-bootstrap";
import styled from 'styled-components';

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
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const App = () => {
  const [link, setLink] = useState("");
  const [barcodeSrc, setBarcodeSrc] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const generateBarcode = () => {
    console.log(link);
    const canvas = document.createElement("canvas");
    canvas.width = 400; // Set the canvas width
    canvas.height = 400; // Set the canvas height
    BWIPJS.toCanvas(
      canvas,
      {
        bcid: "qrcode", // Barcode type
        text: link, // Text to encode
        // Adjust the scale to fit the barcode within the canvas
        // Bar height, in millimeters
        includetext: true, // Show human-readable text
        textxalign: "center", // Always good to set this
      },
      (err) => {
        if (err) {
          // 'err' may be a string or Error object
          console.error(err);
        } else {
        }
      }
    );
    const src = canvas.toDataURL("image/png");
    console.log(src);
    setBarcodeSrc(src);
    console.log("Barcode generated");
    handleShow();
  };
  const styles = {
    container: {
      flex: 1,
      alignContent: "center",
      height: 200,
      width: 200,
      padding: 20,
    },
    image: {
      height: 300,
      width: "auto",
    },
    input: {
      padding: "10px",
      margin: "10px 0",
      boxShadow: "0 0 8px rgba(0,0,0,0.2)",
      borderColor: "#3f51b5",
      borderRadius: "4px",
      width: "70%",
      boxSizing: "border-box",
      '@media (max-width: 768px)': {
        width: '100%',
      },
    },
    button: {
      backgroundColor: "#3f51b5",
      color: "#fff",
      padding: "10px 20px",
      margin: "10px 0",
      boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      width: "25%",
      boxSizing: "border-box",
      '@media (max-width: 768px)': {
        width: '100%',
      },
    },
  };

  return (
    <div className="App">
      <div
        style={{
          maxWidth: "50%",
          margin: "0 auto",
          '@media (max-width: 768px)': {
            maxWidth: '90%',
          },
        }}
      >
        <Container
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "20px",
            '@media (max-width: 768px)': {
              flexDirection: 'column',
            },
          }}
        >
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

      {barcodeSrc && (
        <Modal
          show={show}
          onHide={handleClose}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          dialogClassName="modal-90w"
        >
          <Modal.Dialog style={{ maxWidth: "400px", margin: "0 auto" }}>
            <Modal.Header
              closeButton
              style={{
                backgroundColor: "#3f51b5",
                borderBottom: "1px solid #dee2e6",
                color: "#fff",
                boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                padding: "10px",
                borderRadius: "4px",
              }}
            >
              <Modal.Title>Scan Image!</Modal.Title>
            </Modal.Header>
            <Modal.Body
              style={{
                backgroundColor: "#f8f9fa",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "20px",
              }}
            >
              <div
                style={{
                  ...styles.container,
                  maxWidth: "90%",
                  textAlign: "center",
                }}
              >
                <img
                  src={barcodeSrc}
                  alt="Barcode"
                  style={{ ...styles.image, maxWidth: "100%" }}
                />
              </div>
            </Modal.Body>
            <Modal.Footer
              style={{
                backgroundColor: "#f8f9fa",
                borderTop: "1px solid #dee2e6",
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
                marginTop: "80px", // Add this line
              }}
            >
              <button
                onClick={handleClose}
                style={{
                  backgroundColor: "#3f51b5",
                  color: "#fff",
                  padding: "10px 20px",
                  margin: "10px 0",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  width: "25%",
                  boxSizing: "border-box",
                }}
              >
                Close
              </button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal>
      )}
    </div>
  );
};

export default App;
