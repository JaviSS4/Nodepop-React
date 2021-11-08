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

export const searchByName = (filter) => {
  const url = `${advertBaseUrl}/adverts?name=${filter}`;
  return client.get(url);
};
export const searchByPrice = (filter) => {
  const url = `${advertBaseUrl}/adverts?price<=${filter[0]}&price>=${filter[1]}`;
  return client.get(url);
};
export const searchByTags = (filter, length) => {
  // Tengo el cerebro frito a estas alturas
  if (length === 1) {
    const url = `${advertBaseUrl}/adverts?tags=${filter[0]}`;
    return client.get(url);
  } else if (length === 2) {
    const url = `${advertBaseUrl}/adverts?tags=${filter[0]}&tags=${filter[1]}`;
    return client.get(url);
  } else if (length === 3) {
    const url = `${advertBaseUrl}/adverts?tags=${filter[0]}&tags=${filter[1]}`;
    return client.get(url);
  } else if (length === 4) {
    const url = `${advertBaseUrl}/adverts?tags=${filter[0]}&tags=${filter[1]}&tags=${filter[2]}&tags=${filter[3]}`;
    return client.get(url);
  }
};
export const searchBySale = (filter) => {
  const url = `${advertBaseUrl}/adverts?sale=${filter}`;
  return client.get(url);
};
