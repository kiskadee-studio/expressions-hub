import { HOST, requestOptions } from '@/services/common';
import { type AllExpressions, AllExpressionsSchema } from './Expression.schema';

const getExpressionBySlug = async (slug: string) => {
  const response = await fetch(
    `${HOST}/expressions?filters[slug]=${slug}`,
    requestOptions,
  );

  if (!response.ok) {
    throw new Error('Failed to fetch expression by slug');
  }

  const data = (await response.json()) as AllExpressions;

  return AllExpressionsSchema.parse(data)[0]?.attributes;
};

export { getExpressionBySlug };
