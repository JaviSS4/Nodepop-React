import client from "../../api/client";

const advertBaseUrl = "/api/v1";

export const getLatestAdverts = () => {
  const url = `${advertBaseUrl}/adverts`;
  return client.get(url);
};

export const createAdvert = (advert) => {
  const url = `${advertBaseUrl}/adverts`;
  return client.post(url, advert);
};

export const getAdvert = (id) => {
  const url = `${advertBaseUrl}/adverts/${id}`;
  return client.get(url);
};

export const deleteAdvert = (id) => {
  const url = `${advertBaseUrl}/adverts/${id}`;
  return client.delete(url);
};
