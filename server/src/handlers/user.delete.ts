export const deleteUserHandler = async (payload: any) => {
    const id = payload[0]?.id || payload?.id;
    return {
        message: `User with ID ${id} deleted successfully.`,
        deletedId: id
    };
}