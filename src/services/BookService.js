import http from "httCommon"

const getBooks = (startIndex) => {
  return http.get(`?q={search terms}&startIndex=${startIndex}`);
};

const get = id => {
  return http.get(`/${id}`);
};

const create = data => {
  return http.post("/tutorials", data);
};

const update = (id, data) => {
  return http.put(`/tutorials/${id}`, data);
};

const remove = id => {
  return http.delete(`/tutorials/${id}`);
};

const removeAll = () => {
  return http.delete(`/tutorials`);
};

const findByTitle = title => {
  return http.get(`/tutorials?title=${title}`);
};

export default {
  getBooks,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};