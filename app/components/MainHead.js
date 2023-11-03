import Head from 'next/head';

const MainHead = ({ title, description }) => {
 return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Roboto:wght@100;300;400;500;700&display=swap" rel="stylesheet"/>
      <link rel="stylesheet" href="css/bootstrap.min.css"/>
      <link rel="stylesheet" href="css/fontawesome.min.css"/>
      <link rel="stylesheet" href="css/magnific-popup.min.css"/>
      <link rel="stylesheet" href="css/slick.min.css"/>
      <link rel="stylesheet" href="css/style.css"/>
    </Head>
 );
};
export default MainHead;