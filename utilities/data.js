import path from 'path';
import { promises as fsp } from 'fs';

const dataFileLocation = path.join(process.env.ROOT, 'data.json');

const getPicturesData = async () => {
  const data = await fsp.readFile(dataFileLocation, 'utf-8');
  // console.log(fileNames);
  const parsedData = JSON.parse(data);
  return parsedData;
};

export default getPicturesData;
