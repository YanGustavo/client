import Head from 'next/head';
const Layout = ({ title, children }) => {
return(
  <>
  <Head>
        <title>{title ? title + ' - Eai Chefinho' : 'Eai Chefinho'}</title>
        <link rel="shorcut icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="Project" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
  </Head>
  {children}  
  </>
)
}
export default Layout;