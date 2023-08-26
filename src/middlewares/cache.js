import getExpeditiousCache  from "express-expeditious";

const cacheMemoryConfig = {
  namespace: "expresscache",
  defaultTtl: "5 days",
  statusCodeExpires: {
    404: "5 minutes",
    500: 0,
  },
};

const cacheInit = getExpeditiousCache(cacheMemoryConfig);

export default cacheInit