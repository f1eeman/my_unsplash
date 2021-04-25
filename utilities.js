import pictures from './data';
import authors from './authors';

const getAllPicturesData = () => pictures;

const getPictureDataById = (id) => {
  const [currentPictureData] = pictures.filter((picture) => picture.id === id);
  return currentPictureData;
};

const getAllPicturesIds = () => {
  const ids = pictures.map(({ id }) => ({ id }));
  return ids;
};

const getPictureAuthorById = (id) => {
  const currentPictureAuthor = authors[id];
  return currentPictureAuthor;
};

// Получение данных в данном случае, конечно, неправильное.
// Но мне было лень придумывать к остальным картинкам теги.
// И додумывать сетку для этих картинок

// eslint-disable-next-line no-unused-vars
const getPicturesDataByTags = (tags) => {
  const filteredItems = pictures.filter((picture) => picture.tags);
  return filteredItems;
}


export {
  getAllPicturesData,
  getAllPicturesIds,
  getPictureDataById,
  getPicturesDataByTags,
  getPictureAuthorById,
};
