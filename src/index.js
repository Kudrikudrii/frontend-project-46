import fs from 'fs';
import path from 'path';
import parse from './parse.js';
import stylish from './formatters/stylish.js';
import treeBuilder from './treeBuilder.js';
/* eslint-disable no-undef */
const getFullPath = (filepath) => path.resolve(process.cwd(), filepath);
const extractFormat = (filepath) => path.extname(filepath).slice(1);
const getData = (filepath) => parse(fs.readFileSync(filepath, 'utf-8'), extractFormat(filepath));

const getDiff = (filepath1, filepath2) => {
  const fullFilePath1 = getFullPath(filepath1);
  const fullFilePath2 = getFullPath(filepath2);

  const data1 = getData(fullFilePath1);
  const data2 = getData(fullFilePath2);

  const dataDiff = treeBuilder(data1, data2);

  const formatDiff = stylish(dataDiff);
  return formatDiff;
};

export default getDiff;
