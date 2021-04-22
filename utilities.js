import pictures from './data';

const getAllPicturesData = () => pictures;

const getPictureDataById = (id) => {
  const [currentPictureData] = pictures.filter((picture) => picture.id === String(id));
  return currentPictureData;
};

export { getAllPicturesData, getPictureDataById };
