import client from "../../api/client";

const advertBaseUrl = "/api/v1";

export const getLatestAdverts = () => {
  const url = `${advertBaseUrl}/adverts`;
  return client.get(url);
};
