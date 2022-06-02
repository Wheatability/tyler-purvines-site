/* eslint-disable @next/next/no-page-custom-font */
import Head from 'next/head';

function ExpensesChart({ data }) {
  return (
    <div>
      <Head>
        <title>Expenses Chart</title>
        <meta name="robots" content="noindex"></meta>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&display=swap" rel="stylesheet"></link>
      </Head>

      <main className='bg-ec-cream h-screen w-screen'>

      </main>
    </div >
  );
}

export async function getServerSideProps() {
  const api = process.env.API_URL;
  const res = await fetch(`${api}/api/expenses-chart`);
  const data = await res.json();
  return { props: { data } }
}

export default ExpensesChart;