import Head from 'next/head';

function ExpensesChart({ data }) {
  return (
    <div>
      <Head>
        <title>Expenses Chart</title>
        <meta name="robots" content="noindex"></meta>
      </Head>

      <main className='bg-ec-cream h-screen w-screen'>

      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const api = process.env.API_URL;
  const res = await fetch(`${api}/api/expenses-chart`);
  const data = await res.json();
  return { props: { data } }
}

export default ExpensesChart;