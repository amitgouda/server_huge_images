import React, { useEffect, useState } from "react";
import "./image.css";
import axios from "axios";
import LoaderGif from "../../loading.gif";
const CustomImage = ({ name }) => {
  const [imgSrc, setImgSrc] = useState("");

  useEffect(() => {
    axios(`http://localhost:8000/getImagePng/${name}`).then((res) => {
      if (res.status === 200 && res.data.data) {
        // setImgSrc(`data:image/png;base64,${res.data.data}`);
        setImgSrc(res.data.data);
      }
    });
  }, [name]);

  return (
    <div className="image-container">
      <img
        src={imgSrc || LoaderGif}
        style={{ height: 400, width: 400 }}
        alt="Red dot"
      />
    </div>
  );
};

export default CustomImage;
