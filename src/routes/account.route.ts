// account.route.ts
import { Elysia } from 'elysia';
import { createAccount, getAccountById, updateAccount, deleteAccount } from '../services/account.service';
import { AccountInputSchema } from '../schemas/account.schema';
import {createNewAccount, fetchAccountById, modifyAccount, removeAccount} from "../controllers/account.controller";

const accountRoute = new Elysia({ prefix: '/accounts' })
    .get('/', () => "Hello World")
    .post('/', async ({ body }) => {
        const parsed = AccountInputSchema.safeParse(body);
        if (!parsed.success) {
            return {
                status: 400,
                message: 'Invalid body',
                errors: parsed.error.flatten(),
            };
        }
        return await createNewAccount(parsed.data);
    })
    .get('/:id', async ({ params }) => {
        const id = Number(params.id);
        return await fetchAccountById(id);
    })
    .put('/:id', async ({ params, body }) => {
        const id = Number(params.id);
        const parsed = AccountInputSchema.safeParse(body);
        if (!parsed.success) {
            return {
                status: 400,
                message: 'Invalid body',
                errors: parsed.error.flatten(),
            };
        }
        return await modifyAccount(id, parsed.data);
    })
    .delete('/:id', async ({ params }) => {
        const id = Number(params.id);
        return await removeAccount(id);
    });

export default accountRoute;
