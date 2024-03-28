import React, { useEffect, useState } from "react";
import "../styles/Scans.css";
import axios from "axios";

export default function Scans() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [file, setFile] = useState(null);
  const [prediction, setPrediction] = useState(null); 
  const [predictionDesc, setPredictionDesc] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:8000/")
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleChange = (e) => {
    setFile(e.target.files[0]);
    const f1 = e.target.files[0];
    if (f1) {
      const fileReader = new FileReader();
      fileReader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      fileReader.readAsDataURL(f1);
    }
  };

  const uploadImage = async () => {
    const formData = new FormData();
    formData.append("file", file);
    try {
      const response = await axios.post("http://127.0.0.1:8000/predict", formData);
      if (response.data) {
        console.log(response.data);
        setPrediction(response.data["prediction"]);
        setPredictionDesc(response.data["prediction_desc"]);
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      setError("Error predicting result. Please try again.");
    }
  };

  return (
    <>
      <section>
        <h1 className="cataract-title">Cataract Scanner</h1>
        <center>
          <p className="cataract-desc">
            Scan your eye image to detect cataracts early and protect your
            vision. Take action today!
          </p>
          <div className="cataract-file">
            <form>
              <input type="file" onChange={handleChange} />
            </form>
          </div>
          {selectedImage && (
            <img
              className="predicted-img"
              src={selectedImage}
              alt="Selected"
              style={{ maxWidth: "100%", maxHeight: "200px" }}
            />
          )}
        </center>
        {prediction && predictionDesc && (
          <>
            <div className="prediction-results">
              <h1>Prediction: {prediction}</h1>
            </div>
            <div className="prediction-results">
              <h1>Prediction-Result: {predictionDesc}</h1>
            </div>
          </>
        )}
        {error && (
          <div className="error-message">
            <p>{error}</p>
          </div>
        )}
        <button
          onClick={() => {
            uploadImage();
          }}
          className="cataract-predict-result"
        >
          Predict Result
        </button>
      </section>
    </>
  );
}
