import MainLayout from '../components/MainLayout';
import Searching from '../components/Searching';
import Photos from '../components/Photos';
import { getAllPicturesData } from '../utilities';

const Home = ({ picturesData }) => {
  const mainTitle = {
    text: 'Страница поиска',
    visability: 'hidden',
  };

  return (
    <MainLayout mainTitle={mainTitle} thisPage="searchPage">
      <Searching />
      <Photos picturesData={picturesData} mainPage />
    </MainLayout>
  );
}

export const getStaticProps = () => {
  const picturesData = getAllPicturesData();
  return {
    props: {
      picturesData,
    },
  };
};

export default Home;
