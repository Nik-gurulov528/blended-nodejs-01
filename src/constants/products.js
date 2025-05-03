import path from 'node:path';
import { cwd } from 'node:process';

export const PATH_DB = path.join(cwd(), 'src', 'db', 'db.json');

export const PATH_FILES_DIR = path.join(cwd(), 'src', 'db', 'files');
