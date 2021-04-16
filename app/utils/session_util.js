export const signup = async (user) => {
    const response = await fetch(
        "http://localhost:3000/api/v1/users",
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ user })
        }
    );
    return response.json();
};

export const signin = async (user) => {
    const response = await fetch(
        "http://localhost:3000/api/v1/sign_in",
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ user })
        }
    );
    return response.json();
};