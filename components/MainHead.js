import Head from 'next/head';

const MainHead = ({ title, description }) => {
 return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
 );
};
export default MainHead;