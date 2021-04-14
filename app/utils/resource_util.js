export const showResource = async (resource) => {
    const response = await fetch(
        "http://localhost:3000/resources/1",
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ resource })
        }
    );
    return response.json();
};