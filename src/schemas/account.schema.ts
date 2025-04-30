import { z } from 'zod';

export const AccountInputSchema = z.object({
    id: z.string().uuid().optional(), // ou string normal si non UUID
    accountId: z.string().min(1),
    providerId: z.string().min(1),
    provider: z.string().min(1),
    providerAccountId: z.string().min(1),
    userId: z.string().min(1),
    type: z.string().min(1),
    refreshToken: z.string().optional(),
    accessToken: z.string().optional(),
    expiresAt: z.number().optional(),
    tokenType: z.string().optional(),
    scope: z.string().optional(),
    idToken: z.string().optional(),
    sessionState: z.string().optional(),
    createdAt: z.date().optional(), // tu peux aussi les générer dans le service
    updatedAt: z.date().optional(),
});

export type AccountInputType = z.infer<typeof AccountInputSchema>;
