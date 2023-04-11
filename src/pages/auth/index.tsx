import { NextPageWithLayout } from '../_app';
import { getAuthLayout } from '../../components/layouts/AuthLayout';

type AuthRootPageProps = {
  
}

const AuthRootPage: NextPageWithLayout<AuthRootPageProps> = ({  }) => {
  return (
    <div>
      index Auth
    </div>
  )
};

AuthRootPage.getLayout = getAuthLayout;

export default AuthRootPage;