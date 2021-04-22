import { useSelector } from 'react-redux';
import Photos from '../components/Photos';
import MainLayout from '../components/MainLayout';
import { getPictureDataById } from '../utilities';

const Favourites = () => {
  const favoritesPicturesIds = useSelector((state) => state.favoriteItems.ids);
  // console.log('favoritesPicturesIds', favoritesPicturesIds);
  const picturesData = favoritesPicturesIds.map((id) => {
    const pictureData = getPictureDataById(id);
    return pictureData;
  });
  const mainTitle = {
    text: 'Избранное',
    visability: 'visible',
  };

  return (
    <MainLayout mainTitle={mainTitle} thisPage="favoritesPage" >
      <Photos picturesData={picturesData}/>
    </MainLayout>
  )
};

export default Favourites;