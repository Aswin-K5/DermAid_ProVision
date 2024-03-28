import React, { useState } from "react";
import "../styles/Scans.css";
import { Link } from "react-router-dom";

const Scans = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [predictions, setPredictions] = useState([]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClearImage = () => {
    setSelectedImage(null);
    setPredictions([]);
  };

  const fetchResult = () => {
    const formData = new FormData();
    formData.append("file", selectedImage);

    fetch("/predict", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setPredictions(data);
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div className="containerScans">
      <div className="leftscan">
        <p className="scan-p">
          Upload your image below or click here to open up the camera to scan
        </p>
        <div className="image-container">
          {selectedImage ? (
            <>
              <img src={selectedImage} alt="Selected" />
            </>
          ) : (
            <p className="scan-p">No image selected</p>
          )}
        </div>
        <div className="scan-bt">
          <input
            type="file"
            onChange={handleFileChange}
            className="input-scan"
            accept="image/*"
          />
          <button onClick={handleClearImage} className="scan-clear">
            Clear
          </button>
        </div>
        <button type="button" className="scbt" onClick={fetchResult}>
          Fetch Result
        </button>
        <div className="prediction">
          <p className="scan-head">Predictions:</p>
          <ul className="scan-predict">
            {predictions.map((prediction, index) => (
              <li key={index}>{prediction.label}: {prediction.probability}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="rightscan">
      <p className="scan-head">Results:</p>
        <p className="prediction">
          Predictions: <span className="scan-predict">______________</span>
        </p>
        <p className="scan-head">Remedies :</p>
        <p className="remedies">
          <ol className="rem">
            <li>*********</li>
            <li>*********</li>
            <li>*********</li>
            <li>*********</li>
          </ol>
        </p>
        <button type="submit" className="scbt1">
          <Link to='/Derm'style={{ textDecoration: "none" ,backgroundColor: "#06DBF8", color:"#fff"}}>Contact Nearby Dermatoligist</Link>
        </button>
      </div>
    </div>
  );
};

export default Scans;
