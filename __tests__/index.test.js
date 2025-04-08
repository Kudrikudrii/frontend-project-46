import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import getDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (file) => path.join(__dirname, '..', '__fixtures__', file);
const readFile = (file) => fs.readFileSync(getFixturePath(file), 'utf-8');

describe('Diff generator', () => {
  describe.each([
    { format: 'stylish', resultFile: 'stylishResult.txt' },
    { format: 'plain', resultFile: 'plainResult.txt' },
    { format: 'json', resultFile: 'jsonResult.txt' },
  ])('$format format', ({ format, resultFile }) => {
    const expected = readFile(resultFile);

    test.each([
      { type: 'json', file1: 'file1.json', file2: 'file2.json' },
      { type: 'yaml', file1: 'file1.yaml', file2: 'file2.yaml' },
    ])('should compare $type files correctly', ({ file1, file2 }) => {
      expect(getDiff(getFixturePath(file1), getFixturePath(file2), format)).toEqual(expected);
    });
  });
});
