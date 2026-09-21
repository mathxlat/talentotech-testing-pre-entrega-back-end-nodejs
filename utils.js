export const makeRequest = async (
    url,
    method,
    resource,
    title,
    price,
    category,
) => {
    try {
        const options = {
            method,
            headers: {
                "Content-Type": "application/json",
            },
        };

        if (method !== "GET" && method !== "DELETE") {
            options.body = JSON.stringify({
                title,
                price,
                category,
            });
        }

        const response = await fetch(`${url}/${resource}`, options);

        if (!response.ok) {
            throw new Error(
                `Error: status= ${response.status}, statusText= ${response.statusText}.`,
            );
        }

        return await response.json();
    } catch (error) {
        throw error;
    }
};
