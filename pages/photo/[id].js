import MainLayout from '../../components/MainLayout';
import PhotoCard from '../../components/PhotoCard';
import {
  getAllPicturesIds,
  getPictureDataById,
  getPictureAuthorById,
  getPicturesDataByTags,
} from '../../utilities';

const Photo = ({ pictureItem, authorInfo, similarPictures }) => {
  const handleClick = (id) => () => {
    console.log('id', id);
  };
  const mainTitle = {
    text: 'Страница картинки',
    visability: 'hidden',
  };

  return (
    <MainLayout mainTitle={mainTitle} thisPage="innerPage" >
      <PhotoCard
        pictureItem={pictureItem}
        handleClick={handleClick(pictureItem.id)}
        authorInfo={authorInfo}
        similarPictures={similarPictures}
      />
    </MainLayout>
  );
};

export const getStaticPaths = async () => {
  const allIds = getAllPicturesIds();
  const paths = allIds.map((id) => ({ params: id }));
  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const pictureItem = getPictureDataById(params.id);
  const authorInfo = getPictureAuthorById(pictureItem.authorId);
  const similarPictures = getPicturesDataByTags(pictureItem.tags);
  return {
    props: {
      pictureItem,
      authorInfo,
      similarPictures,
    },
  };
};

export default Photo;
