import { HOST, requestOptions } from '@/services/common';
import { AllExpressionsSchema } from './Expression.schema';
import type { AllExpressions } from './Expression.schema';

const getAllExpressions = async (): Promise<AllExpressions> => {
  const response = await fetch(`${HOST}/expressions`, requestOptions);

  if (!response.ok) {
    throw new Error('Failed to fetch all expressions data');
  }

  const data = (await response.json()) as AllExpressions;

  return AllExpressionsSchema.parse(data);
};

export { getAllExpressions };
