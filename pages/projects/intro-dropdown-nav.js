/* eslint-disable @next/next/no-page-custom-font */
import Head from 'next/head';

function IntroDropdownNav() {
  return (
    <div>
      <Head>
        <title>Intro Section with Dropdown Navigation</title>
        <meta name="robots" content="noindex"></meta>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Epilogue:wght@400;700&display=swap" rel="stylesheet"></link>
      </Head>
      <main>
        <nav>

        </nav>
      
      </main>
      <p style={{ fontSize: "11px", position: "absolute", bottom: "0" }}>
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" rel="noreferrer" target="_blank">Frontend Mentor</a>.
        Coded by <a href="#" >Tyler Purvines.</a>
      </p>
    </div >
  );
};

export default IntroDropdownNav;