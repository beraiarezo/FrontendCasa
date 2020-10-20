import axios from "axios";

export default axios.create({
  baseURL: "https://www.googleapis.com/books/v1/volumes",
  headers: {
    "Content-type": "application/json"
  },
  params: {
    key: "AIzaSyDTmoxnTzen8-9y7DvV084Fl1DMGJPrahE"
  }
});