import MainLayout from '../components/MainLayout';
import Searching from '../components/Searching';
import Photos from '../components/Photos';
import { getPicturesData } from '../utilities/index';

const Home = ({ picturesData }) => {
  const fuck = 'fuck';

  return (
    <MainLayout headTitle="ImageStock" mainTitle="Страница поиска" searchPage>
      <Searching />
      <Photos picturesData={picturesData}/>
    </MainLayout>
  )
};

export const getStaticProps = async () => {
  const picturesData = await getPicturesData();
  return {
    props: {
      picturesData,
    },
  };
};

export default Home;
