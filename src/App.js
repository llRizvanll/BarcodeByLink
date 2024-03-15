import React, { useState } from "react";
import BarcodeModal from "./components/BarcodeModal";
import BarcodeGenerator from "./components/BarcodeGenerator";
import { generateBarcode } from "./barcodeUtils";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  const [link, setLink] = useState("");
  const [barcodeSrc, setBarcodeSrc] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="App">
      <Header />

      <BarcodeGenerator
        style={{ flex: 1 }}
        link={link}
        setLink={setLink}
        generateBarcode={() => generateBarcode(link, setBarcodeSrc, handleShow)}
      />

      {barcodeSrc && (
        <BarcodeModal
          show={show}
          handleClose={handleClose}
          barcodeSrc={barcodeSrc}
        />
      )}
      {/* <Footer/> */}
    </div>
  );
};

export default App;
