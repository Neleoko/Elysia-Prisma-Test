import { createAccount, getAccountById, updateAccount, deleteAccount } from '../services/account.service';
import { AccountInputType } from '../schemas/account.schema';

export const createNewAccount = async (data: AccountInputType) => {
    // Add additional business logic here if needed
    return await createAccount(data);
};

export const fetchAccountById = async (id: number) => {
    return await getAccountById(id);
};

export const modifyAccount = async (id: number, data: Partial<AccountInputType>) => {
    return await updateAccount(id, data);
};

export const removeAccount = async (id: number) => {
    return await deleteAccount(id);
};