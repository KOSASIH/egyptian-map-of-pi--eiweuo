const express = require("express");
const bodyParser = require("body-parser");
const { fetchRegionData, handleLatency } = require("./controllers/regionController");

const app = express();
app.use(bodyParser.json());

// Endpoint untuk mendapatkan data wilayah
app.get("/regions", fetchRegionData);

// Endpoint untuk menentukan wilayah terbaik berdasarkan latensi
app.post("/distribute", handleLatency);

// Jalankan server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


---
