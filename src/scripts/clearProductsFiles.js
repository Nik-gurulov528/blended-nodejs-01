import { PATH_FILES_DIR } from '../constants/products.js';
import fs from 'node:fs/promises';
import path from 'node:path';

export const clearProductsFiles = async () => {
  await fs.readdir(PATH_FILES_DIR).then((result) => {
    result.forEach((item) => {
      const itemPath = path.join(PATH_FILES_DIR, item);
      fs.unlink(itemPath);
    });
  });
};

clearProductsFiles();
