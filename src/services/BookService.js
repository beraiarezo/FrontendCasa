import http from "httCommon";

const getBooks = (startIndex) => {
  return http.get(`?q={search terms}&startIndex=${startIndex}`);
};

const get = (id) => {
  return http.get(`/${id}`);
};

export default {
  getBooks,
  get,
};
