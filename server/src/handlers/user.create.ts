export const createUserHandler = async (payload: any) => {
    // Return a mock created user response
    return {
        User: {
            id: Math.floor(Math.random() * 1000), // Random ID
            ...payload[0] // Add the incoming payload data
        },
        message: "User created successfully"
    };
}