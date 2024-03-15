// BarcodeModal.js
import React from "react";
import { Modal } from "react-bootstrap";

const BarcodeModal = ({ show, handleClose, barcodeSrc }) => {
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
  };

  return (
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
            backgroundColor: "#418AF7",
            padding: "20px",
            margin: "10px",
          }}
        >
          <Modal.Title
            style={{
              color: "#fff",
              fontSize: "24px",
              fontWeight: "bold",
              marginBottom: "10px",
            }}
          >
            Scan Image!
          </Modal.Title>
          <p style={{ color: "#fff", fontSize: "14px", marginTop: "10px" }}>
            Generated at{" "}
            {new Date().toLocaleString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "numeric",
              minute: "numeric",
              second: "numeric",
            })}
          </p>
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
            marginTop: "80px",
          }}
        >
          <button
            onClick={handleClose}
            style={{
              backgroundColor: "#418AF7",
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
  );
};

export default BarcodeModal;
