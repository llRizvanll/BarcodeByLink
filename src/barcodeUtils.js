// barcodeUtils.js
import BWIPJS from "bwip-js";

export const generateBarcode = (link, setBarcodeSrc, handleShow) => {
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
