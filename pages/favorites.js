import { useSelector } from 'react-redux';
import Photos from '../components/Photos';
import MainLayout from '../components/MainLayout';
import { getPictureDataById } from '../utilities';

const Favourites = () => {
  const favoritesPicturesIds = useSelector((state) => state.favoriteItems.ids);
  const picturesData = favoritesPicturesIds.map((id) => {
    const pictureData = getPictureDataById(id.toString());
    return pictureData;
  });
  const mainTitle = {
    text: 'Избранное',
    visability: 'visible',
  };

  return (
    <MainLayout mainTitle={mainTitle} thisPage="favoritesPage" >
      <Photos picturesData={picturesData} favoritePage />
    </MainLayout>
  )
};

export default Favourites;
