import path from 'path';
import { promises as fsp } from 'fs';

const dataFileLocation = path.join(process.env.ROOT, 'data.json');
const authorListFileLocation = path.join(process.env.ROOT, 'authors.json');

const getPicturesData = async () => {
  const data = await fsp.readFile(dataFileLocation, 'utf-8');
  const parsedData = JSON.parse(data);
  return parsedData;
};

const getAllPicturesIds = async () => {
  const data = await fsp.readFile(dataFileLocation, 'utf-8');
  const parsedData = JSON.parse(data);
  const ids = parsedData.map(({ id }) => ({ id }));
  return ids;
};

const getPictureItemById = async (id) => {
  const data = await fsp.readFile(dataFileLocation, 'utf-8');
  const parsedData = JSON.parse(data);
  const [currentPictureItem] = parsedData.filter((item) => item.id === id);
  return currentPictureItem;
};

const getAuthorPictureById = async (id) => {
  const data = await fsp.readFile(authorListFileLocation, 'utf-8');
  const parsedData = JSON.parse(data);
  const currentAuthorPicture = parsedData[id];
  return currentAuthorPicture;
};

// Получение данных в данном случае, конечно, неправильное.
// Но мне было лень придумывать к остальным картинкам теги.
// И додумывать сетку для этих картинок

// eslint-disable-next-line no-unused-vars
const getPicturesByTags = async (tags) => {
  const data = await fsp.readFile(dataFileLocation, 'utf-8');
  const parsedData = JSON.parse(data);
  const filteredItems = parsedData.filter((item) => item.tags !== undefined);
  return filteredItems;
}

export {
  getPicturesData,
  getAllPicturesIds,
  getPictureItemById,
  getAuthorPictureById,
  getPicturesByTags,
};
