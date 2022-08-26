import { BlitzPage } from '@blitzjs/next';

import Table from 'app/core/components/Table';
import Layout from 'app/core/layouts/Layout';

const Home: BlitzPage = () => {
  return (
    <Layout title="Home">
      <div className="container">
        <main>
          <Table columns={[]} data={[]} />
        </main>
      </div>
    </Layout>
  );
};

export default Home;
