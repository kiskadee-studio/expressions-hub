import { getExpressionById } from '@/services/expressions/get-expression-by-id';

const Expression = async () => {
  const expression = await getExpressionById('1');

  return (
    <div>
      <h1>Expression: {expression.data.attributes.name}</h1>
    </div>
  );
};

export default Expression;
