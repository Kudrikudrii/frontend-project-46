import getDiff from '../src/index.js';
import { fileURLToPath } from 'url';
import fs from 'fs';
import path from 'path';
import { test, expect } from '@jest/globals';

const __filename = fileURLToPath(import.meta.url); // Полный путь к текущему файлу
const __dirname = path.dirname(__filename); // Директория файла

const getFixturePath = (file) => path.join(__dirname, '..', '__fixtures__', file);
const readFile = (file) => fs.readFileSync(getFixturePath(file), 'utf-8');

test('JSON float files stylish format', () => {
  expect(getDiff(getFixturePath('file1.json'), getFixturePath('file2.json'))).toEqual(readFile('result.txt').trim());
});
test('JSON nested files stylish format', () => {
  expect(getDiff(getFixturePath('file3.json'), getFixturePath('file4.json'))).toEqual(readFile('result2.txt').trim());
});
test('yml float files stylish format', () => {
  expect(getDiff(getFixturePath('file1.yml'), getFixturePath('file2.yml'))).toEqual(readFile('result.txt').trim());
});
test('yml nested files stylish format', () => {
  expect(getDiff(getFixturePath('file3.yml'), getFixturePath('file4.yml'))).toEqual(readFile('result2.txt').trim());
});
