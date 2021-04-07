import MainLayout from '../components/MainLayout';
import Searching from '../components/Searching';
import Photos from '../components/Photos';

const Home = () => {
  const fuck = 'fuck';

  return (
    <MainLayout headTitle="ImageStock" mainTitle="Страница поиска">
      <Searching />
      <Photos />
    </MainLayout>
  )
};

export default Home;
