import { BlitzPage, Routes } from '@blitzjs/next';
import { SignupForm } from 'app/auth/components/SignupForm';
import Layout from 'app/core/layouts/Layout';
import { useRouter } from 'next/router';

const SignupPage: BlitzPage = () => {
  const router = useRouter();

  return (
    <Layout title="Sign Up">
      <SignupForm onSuccess={() => router.push(Routes.Home())} />
    </Layout>
  );
};

export default SignupPage;
