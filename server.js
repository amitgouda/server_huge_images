const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const bodyParser = require("body-parser");
const axios = require("axios");
const cors = require("cors");
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
let lastSuccessBase64Url = "";
let lastSuccessUrl = "";
app.get("/getImageBase64/:id", async (req, res) => {
  const id = req.params.id;
  try {
    let image = await axios.get(`https://picsum.photos/id/${id}/400/400`);
    const base64Url = Buffer.from(image.data).toString("base64");
    lastSuccessBase64Url = base64Url;
    res.json({
      data: base64Url,
    });
  } catch (error) {
    res.json({
      data: lastSuccessBase64Url,
    });
  }
});

app.get("/getImagePng/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const imageURl = `https://picsum.photos/id/${id}/400/400`;
    await axios.get(imageURl);
    lastSuccessUrl = imageURl;
    res.json({
      data: imageURl,
    });
  } catch (error) {
    res.json({
      data: lastSuccessUrl,
    });
  }
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));
