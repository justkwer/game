import { MainLayout } from '@layout';
import Link from 'next/link';
import { PathsToPage } from '@core/constants';
import { Button } from '@components';

const Main = () => {
  return (
    <MainLayout>
      <Link href={PathsToPage.Play}>
        <Button>На тебе кнопку блять</Button>
      </Link>
    </MainLayout>
  );
};

export default Main;
