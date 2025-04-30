import { PrismaClient } from '@prisma/client';
import { AccountInputType } from '../schemas/account.schema';

const prisma = new PrismaClient();


export const createAccount = async (data: AccountInputType) => {
    const now = new Date();
    return prisma.account.create({
        data: {
            ...data,
            id: crypto.randomUUID(), // ou autre ID
            createdAt: now,
            updatedAt: now,
        },
    });
};

export const getAccountById = async (id: number) => {
    return prisma.account.findUnique({
        where: { id: id.toString() }, // Convert id to string
    });
};

export const updateAccount = async (id: number, data: Partial<AccountInputType>) => {
    return prisma.account.update({
        where: { id: id.toString() }, // Convert id to string
        data,
    });
};

export const deleteAccount = async (id: number) => {
    return prisma.account.delete({
        where: { id: id.toString() }, // Convert id to string
    });
};