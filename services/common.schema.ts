import { z } from 'zod';

const MetaSchema = z.object({
  pagination: z
    .object({
      page: z.number(),
      pageSize: z.number(),
      pageCount: z.number(),
      total: z.number(),
    })
    .optional(),
});

export { MetaSchema };
