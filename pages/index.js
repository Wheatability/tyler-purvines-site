import { ApolloClient, InMemoryCache } from '@apollo/client';
import { GET_HOMEPAGE } from '../graphql/queries';
import Head from 'next/head';
import Image from 'next/image';

export default function Home({ homePage }) {
  return (
    <div>
      <Head>
        <title>Tyler Purvines: Web Marketer, Developer, Cat Lover</title>
        <meta
          name="description"
          content="Explore how digital marketing and development come together. Tyler shares his journey from SEO marketer to web developer."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>{homePage.Hero.Heading}</h1>

        <p>{homePage.Hero.Subheading}</p>
      </main>

      <footer></footer>
    </div>
  );
}

export const getStaticProps = async () => {
  const client = new ApolloClient({
    uri: process.env.STRAPI_GRAPHQL_API,
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({ query: GET_HOMEPAGE });

  return {
    props: {
      homePage: data.homepage.data.attributes,
    },
  };
};
