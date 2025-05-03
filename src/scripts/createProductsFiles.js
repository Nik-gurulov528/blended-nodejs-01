import path from 'node:path';
import { PATH_FILES_DIR, PATH_DB } from '../constants/products.js';
import fs from 'node:fs/promises';

export const createProductsFiles = async () => {
  await fs.readFile(PATH_DB, { encoding: 'utf-8' }).then((result) => {
    const data = JSON.parse(result);

    data.forEach((item) => {
      let itemName = item.name;
      while (itemName.includes(' ')) {
        itemName =
          itemName.slice(0, itemName.indexOf(' ')) +
          '-' +
          itemName.slice(itemName.indexOf(' ') + 1);
      }
      let newName = itemName.toLowerCase() + '.json';
      const inside = path.join(PATH_FILES_DIR, newName);
      fs.writeFile(inside, JSON.stringify(item));
    });
  });
};

createProductsFiles();
