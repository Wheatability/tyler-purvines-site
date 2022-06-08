/* eslint-disable @next/next/no-page-custom-font */
import Head from 'next/head';

function IntroDropdownNav() {
  return (
    <div>
      <Head>
        <title>Expenses Chart</title>
        <meta name="robots" content="noindex"></meta>
      </Head>
      <main>
        <p style={{ fontSize: "11px", position: "absolute", bottom: "0" }}>
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" rel="noreferrer" target="_blank">Frontend Mentor</a>.
          Coded by <a href="#" >Tyler Purvines.</a>
        </p>
      </main>

    </div >
  );
};

export default IntroDropdownNav;