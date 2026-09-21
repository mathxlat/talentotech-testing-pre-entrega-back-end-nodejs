import { makeRequest } from "./utils.js";

const url = "https://fakestoreapi.com";

const [
    method = "GET",
    resource = "products",
    title = "",
    price = 0,
    category = "",
] = process.argv.slice(2);

makeRequest(url, method, resource, { title, price, category })
    .then((result) => console.log(result))
    .catch((error) => console.error(error.message));
