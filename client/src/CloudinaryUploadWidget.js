import React, { Component } from "react";
import ph from "./assets/placeholder.png";
import './pages/MyCause/MyCause.css';
class CloudinaryUploadWidget extends Component {
  componentDidMount() {
    var myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: "dqdos0r64",
        uploadPreset: "cause_avatar",
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log("Done! Here is the image info: ", result.info);
        }
      }
    );
    document.getElementById("upload_widget").addEventListener(
      "click",
      function () {
        myWidget.open();
      },
      false
    );
  }
  render() {
    return (
        <div className="imgDivTainer1" style={{ position: "relative" }}>
          <img className="imgPartner" src={ph} alt="placeholder" />
          <button
            id="upload_widget"
            className="cloudinary-button"
          >
            Upload
          </button>
        </div>
    )
  }
}
export default CloudinaryUploadWidget;