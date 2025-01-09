const AWS = require("aws-sdk");
const { regions, defaultRegion } = require("./regionConfig");

AWS.config.update({
  region: defaultRegion,
  apiVersions: {
    dynamodb: "2012-08-10",
    s3: "2006-03-01",
  },
});

const getClient = (service, region) => {
  return new AWS[service]({ region });
};

module.exports = { AWS, getClient, regions, defaultRegion };


---
