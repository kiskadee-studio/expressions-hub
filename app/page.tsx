import { getAllExpressions } from '@/services/expressions/get-all-expressions';
// import type { Metadata } from 'next';
//
// export const metadata: Metadata = {
//   title: 'Expressions',
//   description: 'Expressions',
// };

const Home = async () => {
  const expressions = await getAllExpressions();

  return (
    <div>
      <h1>Home</h1>
      {expressions.data.map((expression) => (
        <a href={`/expression/${expression.id}`} key={expression.id}>
          {expression.attributes.name}
        </a>
      ))}
    </div>
  );
};

export default Home;
