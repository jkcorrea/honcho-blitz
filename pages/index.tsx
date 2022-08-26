import { BlitzPage } from '@blitzjs/next';

import userData from 'app/assets/mock_user_data.json';
import { Table } from 'app/core/components/Table';
import Layout from 'app/core/layouts/Layout';

type TData = typeof userData[number];

const Home: BlitzPage = () => {
  return (
    <Layout title="Home">
      <div className="container">
        <main>
          <Table<TData>
            columns={[
              {
                header: 'ID',
                accessorKey: 'id',
              },
              {
                header: 'Name',
                accessorKey: 'name',
              },
              {
                header: 'Email',
                accessorKey: 'email',
              },
            ]}
            data={userData}
          />
        </main>
      </div>
    </Layout>
  );
};

export default Home;
