import { getExpressionById } from '@/services/expressions/get-expression-by-id';
import type { Locale } from '@/i18n-config';
import { getDictionary } from '@/get-dictionary';

interface ExpressionProps {
  params: { lang: Locale };
}

const Expression = async ({ params: { lang } }: ExpressionProps) => {
  const expression = await getExpressionById('1');
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const dictionary = await getDictionary(lang);

  return (
    <div>
      <h1>
        Expression: {expression.data.attributes.name} - {lang} -{' '}
        {/* eslint-disable-next-line @typescript-eslint/no-unsafe-member-access */}
        {dictionary['server-component'].welcome}
      </h1>
    </div>
  );
};

export default Expression;
