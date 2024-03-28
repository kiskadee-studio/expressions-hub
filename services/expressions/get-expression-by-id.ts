import { HOST, requestOptions } from '@/services/common';
import { ExpressionSchema } from './Expression.schema';
import type { Expression } from './Expression.schema';

const getExpressionById = async (id: string): Promise<Expression> => {
  const response = await fetch(`${HOST}/expressions/${id}`, requestOptions);

  if (!response.ok) {
    throw new Error('Failed to fetch expression by id data');
  }

  const data = (await response.json()) as Expression;

  return ExpressionSchema.parse(data);
};

export { getExpressionById };
