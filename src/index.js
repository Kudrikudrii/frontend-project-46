import fs from 'fs';
import path from 'path';
import parse from './parse.js';
import formatter from './formatters/index.js';
import treeBuilder from './treeBuilder.js';

/* eslint-disable no-undef */
const getFullPath = (filePath) => path.resolve(process.cwd(), filePath);
const extractFormat = (filePath) => path.extname(filePath).slice(1);
const getData = (filePath) => parse(fs.readFileSync(filePath, 'utf-8'), extractFormat(filePath));

const getDiff = (filePath1, filePath2, format = 'stylish') => {
  const fullFilePath1 = getFullPath(filePath1);
  const fullFilePath2 = getFullPath(filePath2);

  const data1 = getData(fullFilePath1);
  const data2 = getData(fullFilePath2);

  const dataDiff = treeBuilder(data1, data2);

  return formatter(format)(dataDiff);
};

export default getDiff;
