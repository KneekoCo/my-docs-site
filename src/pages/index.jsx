import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Home() {
  return (
    <Layout
      title="KneekoCo Docs Portfolio"
      description="A showcase of MDX-based technical documentation using Docusaurus.">
      <main style={{ padding: '4rem 2rem', textAlign: 'center' }}>
        <img
          src={useBaseUrl('img/ThaLogo.png')}
          alt="KneekoCo Logo"
          style={{ maxWidth: '150px', marginBottom: '1.5rem' }}
        />
        <h1>Welcome to My Documentation Portfolio</h1>
        <p>
          Explore how I use <strong>Docusaurus</strong> to deliver developer-friendly documentation experiences.
        </p>

        <div style={{ marginTop: '2rem' }}>
          <Link className="button button--primary" to="/docs/welcome">
            View My Docs
          </Link>
          <Link
            className="button button--secondary"
            style={{ marginLeft: '1rem' }}
            to="https://github.com/KneekoCo/my-docs-site"
          >
            GitHub Repo
          </Link>
        </div>
      </main>
    </Layout>
  );
}
