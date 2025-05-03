import { PATH_DB } from '../constants/products.js';
import fs from 'node:fs/promises';

export const getTotalPrice = async () => {
  await fs
    .readFile(PATH_DB, { encoding: 'utf-8' })
    .then((result) => {
      const data = JSON.parse(result);

      const totalPrice = data.reduce((acc, item) => +item.price + acc, 0);

      console.log(totalPrice);
    })
    .catch((error) => console.log(error));
};

getTotalPrice();
