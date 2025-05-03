import { PATH_DB } from '../constants/products.js';
import fs from 'node:fs/promises';

export const getProductsByMinPrice = async (minPrice = 0) => {
  await fs
    .readFile(PATH_DB, { encoding: 'utf-8' })
    .then((result) => {
      const data = JSON.parse(result);
      const correctProducts = data.filter((item) => item.price >= minPrice);
      console.log(correctProducts);
    })
    .catch((error) => console.log(error));
};

// Enter your number in the function below
getProductsByMinPrice();
