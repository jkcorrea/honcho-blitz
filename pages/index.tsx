import { BlitzPage } from '@blitzjs/next';
import Layout from 'app/core/layouts/Layout';

/*
 * This file is just for a pleasant getting started page for your new app.
 * You can delete everything in here and start from scratch if you like.
 */

const Main = () => {
  // const currentUser = useCurrentUser();
  // const [logoutMutation] = useMutation(logout);

  return <div>Honcho</div>;
};

const Home: BlitzPage = () => {
  return (
    <Layout title="Home">
      <div className="container">
        <main>
          <Main />
        </main>
      </div>
    </Layout>
  );
};

export default Home;
