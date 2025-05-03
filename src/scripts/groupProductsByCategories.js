import { PATH_DB } from '../constants/products.js';
import fs from 'node:fs/promises';

export const groupProductsByCategories = async () => {
  fs.readFile(PATH_DB, { encoding: 'utf-8' })
    .then((result) => {
      const data = JSON.parse(result);

      const listOfCategories = {};

      data.forEach((item) => (listOfCategories[item.category] = []));

      data.forEach((item) => listOfCategories[item.category].push(item.name));

      console.log(listOfCategories);
    })
    .catch((error) => console.log(error));
};

groupProductsByCategories();
