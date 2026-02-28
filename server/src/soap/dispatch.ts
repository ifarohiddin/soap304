import { createUserHandler } from '../handlers/user.create.ts';
import { deleteUserHandler } from '../handlers/user.delete.ts';
import { listUsersHandler } from '../handlers/user.list.ts';
import { updateUserHandler } from '../handlers/user.update.ts';

export const dispatch = async (operationType: string, payload: any) => {
    switch (operationType) {
        case 'createUser':
            return await createUserHandler(payload);
        case 'deleteUser':
            return await deleteUserHandler(payload);
        case 'getAllUsers':
            return await listUsersHandler(payload);
        case 'updateUser':
            return await updateUserHandler(payload);
        default:
            throw new Error(`Unknown operation type: ${operationType}`);
    }
}