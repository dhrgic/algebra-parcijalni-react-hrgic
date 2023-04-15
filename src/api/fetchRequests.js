import { apiOriginUrl } from "./api";

export const getUser = (user) => {
  return fetch(`${apiOriginUrl}${user}`, {
    headers: {},
  }).then((res) => {
    if (!res.ok) {
      throw res;
    }
    return res.json();
  });
};

export const getRepositories = (user) => {
  return fetch(`${apiOriginUrl}${user}/repos`, {
    headers: {},
  }).then((res) => {
    if (!res.ok) {
      throw res;
    }
    return res.json();
  });
};
