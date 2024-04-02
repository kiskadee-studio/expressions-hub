import { z } from 'zod';
import { MetaSchema } from '@/services/common.schema';

const ExpressionAttributesSchema = z.object({
  createdAt: z.string(),
  publishedAt: z.string(),
  updatedAt: z.string(),
  synonyms: z.string(),
  language: z.string(),
  slug: z.string(),
  name: z.string(),
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
