const makeRequest = async (url, method, resource, title, price, category) => {
    try {
        const options = {
            method,
            headers: {
                "Content-Type": "application/json",
            }
        }

        if (method !== "GET" && method !== "DELETE") {
            options.body = JSON.stringify({
                title,
                price,
                category
            });
        }

        const response = await fetch(`${url}/${resource}`, options);

        if (!response.ok) {
            throw new Error(`Estado de respuesta: ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Ocurrió un error durante la solicitud.");
        throw error;
    }
}  

const url = "https://fakestoreapi.com";

const [
    method = "GET", 
    resource = "products", 
    title = "", 
    price = 0, 
    category = ""
] = process.argv.slice(2);

makeRequest(url, method, resource, title, price, category)
    .then(result => console.log(result))
    .catch(error => console.error(error.message));
