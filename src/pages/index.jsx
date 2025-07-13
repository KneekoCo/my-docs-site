import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Home() {
  return (
    <Layout
      title="Welcome to Kneeko Co"
      description="Your documentation, simplified.">
      <main
        className="homepage"
        style={{ padding: '4rem 2rem', textAlign: 'center' }}
      >
        <img
          src={useBaseUrl('/img/ThaLogo.png')}
          alt="KneekoCo Logo"
          style={{ maxWidth: '200px', marginBottom: '2rem' }}
        />

        <h1 className="homepage-title">Welcome to KneekoCo Docs</h1>
        
         
       

        <Link
          to="/docs/welcome" // <-- use correct link path
          style={{
            display: 'inline-block',
            marginTop: '2rem',
            padding: '0.75rem 1.5rem',
            background: '#a02124',
            color: '#fff',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '1rem',
          }}
        >
          Get Started
        </Link>
      </main>
    </Layout>
  );
}
