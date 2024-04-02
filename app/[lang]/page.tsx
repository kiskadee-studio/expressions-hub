import { getAllExpressions } from '@/services/expressions/get-all-expressions';
import type { Locale } from '@/i18n-config';
// import type { Metadata } from 'next';
//
// export const metadata: Metadata = {
//   title: 'Expressions',
//   description: 'Expressions',
// };

interface HomePageProps {
  params: { lang: Locale };
}

const Home = async ({ params: { lang } }: HomePageProps) => {
  const expressions = await getAllExpressions();

  return (
    <div>
      <h1>Home</h1>
      {expressions.map((expression) => (
        <a
          href={`${lang}/expression/${expression.attributes.slug}`}
          key={expression.id}
        >
          {expression.attributes.name}
        </a>
      ))}
    </div>
  );
};

export default Home;
