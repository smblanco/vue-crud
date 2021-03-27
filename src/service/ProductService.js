import axios from "axios";
const BASE_URL = "https://dummyapi.io/data/api";
const APP_ID = "605f85886101818f6c8d82c2";
export default class ProductService {
  getProductsSmall() {
    return axios
      .get(`${BASE_URL}/user`, { headers: { "app-id": APP_ID } })
      .then(data => data.data.data);
  }

  getProducts() {}

  getProductsWithOrdersSmall() {
    return axios.get(data).then(res => res.config.url.data);
  }
}
