import { getExpressionBySlug } from '@/services/expressions/get-expression-by-slug';
import type { Locale } from '@/i18n-config';
import { getDictionary } from '@/get-dictionary';

interface ExpressionPageProps {
  params: { lang: Locale; slug: string };
}

const ExpressionPage = async ({
  params: { lang, slug },
}: ExpressionPageProps) => {
  const expression = await getExpressionBySlug(slug);
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
