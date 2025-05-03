import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';
import { createFakeProduct } from '../utils/createFakeProduct.js';

export const generateProducts = async (number = 1) => {
  await fs
    .readFile(PATH_DB, { encoding: 'utf-8' })
    .then((result) => {
      const data = JSON.parse(result);

      for (let i = 1; i <= number; i += 1) {
        data.push(createFakeProduct());
      }

      return data;
    })
    .then((data) => {
      const result = JSON.stringify(data);
      fs.writeFile(PATH_DB, result);
    })
    .catch((error) => console.log(error));
};

// Enter your number in the function below
generateProducts();
