import { PATH_DB } from '../constants/products.js';
import fs from 'node:fs/promises';

export const modifyProducts = async () => {
  await fs
    .readFile(PATH_DB, { encoding: 'utf-8' })
    .then((result) => {
      const data = JSON.parse(result);

      const newDB = data.map((item) => {
        delete item.description;

        return item;
      });

      const newArray = JSON.stringify(newDB);

      fs.writeFile(PATH_DB, newArray);
    })
    .catch((error) => console.log(error));
};

modifyProducts();
