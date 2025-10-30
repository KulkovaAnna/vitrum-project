import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Layout from '@theme/Layout';
import type { ReactNode } from 'react';

import { translate } from '@docusaurus/Translate';

export default function Home(): ReactNode {
  return (
    <Layout
      title={translate({ id: 'theme.homePage.pageTitle' })}
      description="Description will go into a meta tag in <head />"
    >
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
