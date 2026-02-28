export const listUsersHandler = async (payload: any) => {
    // Mock data for now
    return {
        Users: {
            User: [
                { id: 1, name: "Ali", email: "ali@example.com" },
                { id: 2, name: "Vali", email: "vali@example.com" }
            ]
        }
    };
}