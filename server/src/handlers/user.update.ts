export const updateUserHandler = async (payload: any) => {
    const id = payload[0]?.id || payload?.id;
    return {
        message: `User with ID ${id} updated successfully.`,
        updatedData: payload[0]
    };
}
