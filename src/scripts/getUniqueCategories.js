import { PATH_DB } from '../constants/products.js';
import fs from 'node:fs/promises';

export const getUniqueCategories = async () => {
  await fs
    .readFile(PATH_DB, { encoding: 'utf-8' })
    .then((result) => {
      const data = JSON.parse(result);

      const uniqueCategories = [];

      data.forEach((item) => {
        if (uniqueCategories.includes(item.category)) {
          return;
        } else {
          uniqueCategories.push(item.category);
          return;
        }
      });

      console.log(uniqueCategories);
    })
    .catch((error) => console.log(error));
};

getUniqueCategories();
