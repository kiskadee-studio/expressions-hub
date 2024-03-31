import { getExpressionById } from '@/services/expressions/get-expression-by-id';
import type { Locale } from '@/i18n-config';
import { getDictionary } from '@/get-dictionary';

interface ExpressionPageProps {
  params: { lang: Locale };
}

const ExpressionPage = async ({ params: { lang } }: ExpressionPageProps) => {
  const expression = await getExpressionById('1');
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const t = await getDictionary(lang);

  return (
    <div>
      <h1>
        {t.expression.definition} - {expression.name} - {lang}
      </h1>
    </div>
  );
};

export default ExpressionPage;
