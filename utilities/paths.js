import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { promises as fsp } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const picturesDirectory = path.join(__dirname, '..', 'pictures');

const getPicturesPaths = async () => {
  const fileNames = await fsp.readdir(picturesDirectory);
  // console.log(fileNames);
  const picturesFullPaths = fileNames.map((fileName) => path.join(picturesDirectory, fileName));
  return picturesFullPaths;
};

export default getPicturesPaths;

