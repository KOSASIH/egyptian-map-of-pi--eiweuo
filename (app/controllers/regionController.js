const { getRegionData, distributeTraffic } = require("../services/regionService");

const fetchRegionData = async (req, res) => {
  try {
    const { region } = req.query;
    const data = await getRegionData(region);
    res.status(200).json({ region, data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const handleLatency = async (req, res) => {
  try {
    const latency = req.body.latency; // Input latensi setiap wilayah
    const bestRegion = await distributeTraffic(latency);
    res.status(200).json({ bestRegion });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { fetchRegionData, handleLatency };


---
