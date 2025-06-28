import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link'; // ✅ Important

export default function Home() {
  return (
    <Layout
      title="Welcome to KneekoCo"
      description="Your documentation, simplified.">
      <main style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Welcome to KneekoCo Docs</h1>
        <p>Let's document easy.</p>
        <Link
          to="/docs/intro"
          style={{
            display: 'inline-block',
            marginTop: '1.5rem',
            padding: '0.75rem 1.5rem',
            background: '#25c2a0',
            color: '#fff',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 'bold'
          }}>
          Get Started
        </Link>
      </main>
    </Layout>
  );
}
