/* eslint-disable @next/next/no-page-custom-font */
import Head from 'next/head';
import Image from 'next/image';
import heroImage from '../../public/images/idn-hero-mobile.png';

function IntroDropdownNav() {
  return (
    <div>
      <Head>
        <title>Intro Section with Dropdown Navigation</title>
        <meta name='robots' content='noindex'></meta>
        <link rel='preconnect' href='https://fonts.googleapis.com'></link>
        <link rel='preconnect' href='https://fonts.gstatic.com'></link>
        <link href='https://fonts.googleapis.com/css2?family=Epilogue:wght@400;700&display=swap' rel='stylesheet'></link>
      </Head>
      <main className='max-w-[1440px] font-idn-sans'>
        <nav>

        </nav>
        <div className='flex'>
          <div className='flex flex-col md:flex-row'>
            <div className='w-full md:order-2'>
              <Image
                src={heroImage}
                alt='Guy with Laptop'
              />
            </div>
            <div id='hero-text' className='w-[540px] flex flex-col space-y-12'>
              <h1 className='text-idn-lg font-bold tracking-tight leading-[80px]'>Make<br />remote work</h1>
              <p className='text-idn-md leading-7 w-[445px]'>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
              <button href='#' className='font-bold rounded-[15px] bg-black w-[163px] h-[56px] text-white'>Learn More</button>
            </div>
          </div>
        </div>
        <p className='text-center text-[11px] bottom-0 absolute w-screen'>
          Challenge by <a href='https://www.frontendmentor.io?ref=challenge' rel='noreferrer' target='_blank'>Frontend Mentor</a>.
          Coded by <a href='#' >Tyler Purvines.</a>
        </p>
      </main>
    </div >
  );
};

export default IntroDropdownNav;