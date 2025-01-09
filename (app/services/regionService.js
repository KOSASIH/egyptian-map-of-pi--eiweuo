const { getClient, regions } = require("../../config/awsConfig");

const switchRegion = (region) => {
  if (!regions.includes(region)) {
    throw new Error(`Region ${region} is not supported.`);
  }
  return getClient("DynamoDB", region);
};

const getRegionData = async (region) => {
  try {
    const dynamoDB = switchRegion(region);
    const params = {
      TableName: "MarketplaceRegions",
    };
    const data = await dynamoDB.scan(params).promise();
    return data.Items;
  } catch (error) {
    throw new Error(`Failed to fetch data from ${region}: ${error.message}`);
  }
};

const distributeTraffic = async (latency) => {
  try {
    const sortedRegions = regions.sort((a, b) => latency[a] - latency[b]);
    const bestRegion = sortedRegions[0];
    return bestRegion;
  } catch (error) {
    throw new Error("Failed to distribute traffic: " + error.message);
  }
};

module.exports = { getRegionData, distributeTraffic };


---
