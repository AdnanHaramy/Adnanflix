import Head from 'next/head'
import Layout from '../components/layout/layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        {/* A head tag that is added to all the pages */}
        {/* the title and the description will be overwritten by other pages 
        but if we forget to set the title or the description for any page we will 
        have our default title and description that will apply to all pages */}
        <title>Next Events</title>
        <meta name="description" content='NextJs Events' />
        <meta name="viewport" content='initial-scale=1.0 , width=device-width ' />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;
