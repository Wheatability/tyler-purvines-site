/* eslint-disable @next/next/no-page-custom-font */
import Head from 'next/head';
import ECWidget from '../../components/expenses-chart/ec-widget';

function ExpensesChart({ data }) {
  return (
    <div>
      <Head>
        <title>Expenses Chart</title>
        <meta name="robots" content="noindex"></meta>
      </Head>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&display=swap" rel="stylesheet"></link>
      <main className='bg-ec-cream h-screen w-screen flex flex-col justify-center items-center'>
        <ECWidget
          data={data} />
        <h1 style={{ fontSize: "11px", position: "absolute", bottom: "0" }}>
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" rel="noreferrer" target="_blank">Frontend Mentor</a>.
          Coded by <a href="#" >Tyler Purvines.</a>
        </h1>
      </main>

    </div >
  );
};

export async function getServerSideProps() {
  const api = process.env.API_URL;
  const res = await fetch(`${api}/api/expenses-chart`);
  const data = await res.json();
  return { props: { data } }
}

export default ExpensesChart;