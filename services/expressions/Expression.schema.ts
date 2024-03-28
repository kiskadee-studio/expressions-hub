import { z } from 'zod';
import { MetaSchema } from '@/services/common.schema';

const ExpressionSchema = z.object({
  data: z.object({
    id: z.number(),
    attributes: z.object({
      createdAt: z.string(),
      Language: z.string(),
      publishedAt: z.string(),
      meaning: z.string(),
      origin: z.string(),
      name: z.string(),
      updatedAt: z.string(),
    }),
  }),
  meta: MetaSchema,
});

type Expression = z.infer<typeof ExpressionSchema>;

const AllExpressionsSchema = z.object({
  data: z.array(
    ExpressionSchema.shape.data.pick({
      id: true,
      attributes: true,
    }),
  ),
  meta: MetaSchema,
});

type AllExpressions = z.infer<typeof AllExpressionsSchema>;

export { ExpressionSchema, AllExpressionsSchema };
export type { Expression, AllExpressions };
