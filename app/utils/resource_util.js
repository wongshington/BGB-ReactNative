export const showResource = async (resourceId) => {
    const response = await fetch(
        `http://localhost:3000/resources/${resourceId}`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }
    );
    return response.json();
};

export const fetchResources = async () => {
    const response = await fetch(
        `http://localhost:3000/resources/`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }
    );
    return response.json();
};