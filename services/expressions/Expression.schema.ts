import { z } from 'zod';
import { MetaSchema } from '@/services/common.schema';

const ExpressionAttributesSchema = z.object({
  createdAt: z.string(),
  Language: z.string(),
  publishedAt: z.string(),
  meaning: z.string(),
  origin: z.string(),
  name: z.string(),
  updatedAt: z.string(),
});

const ExpressionSchema = z
  .object({
    data: z.object({
      id: z.number(),
      attributes: ExpressionAttributesSchema,
    }),
    meta: MetaSchema,
  })
  .transform((data) => data.data.attributes);

type Expression = z.infer<typeof ExpressionSchema>;

const AllExpressionsSchema = z
  .object({
    data: z.array(
      z.object({
        id: z.number(),
        attributes: ExpressionAttributesSchema,
      }),
    ),
    meta: MetaSchema,
  })
  .transform((data) => data.data);

type AllExpressions = z.infer<typeof AllExpressionsSchema>;

export { ExpressionSchema, AllExpressionsSchema };
export type { Expression, AllExpressions };
