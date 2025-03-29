import fs from 'fs';
import path from 'path';
import parse from './parse.js';
import stylish from './formatters/stylish.js';
import treeBuilder from './treeBuilder.js';

const getFullPath = (filepath) => path.resolve(process.cwd(), filepath);
// const getFullPath = (filepath) => path.resolve(process.cwd(), filepath);

// /home/kudri/frontend-project-46/__fixtures__/file1.json
const extractFormat = (filepath) => path.extname(filepath).slice(1);
// json
const getData = (filepath) => parse(fs.readFileSync(filepath, 'utf-8'), extractFormat(filepath));
// {
//   host: 'hexlet.io',
//   timeout: 50,
//   proxy: '123.234.53.22',
//   follow: false
// }
const genDiff = (filepath1, filepath2) => {
  const fullFilePath1 = getFullPath(filepath1);
  const fullFilePath2 = getFullPath(filepath2);

  const data1 = getData(fullFilePath1);
  const data2 = getData(fullFilePath2);

  const dataDiff = treeBuilder(data1, data2);
  // [
  //   { status: 'deleted', key: 'follow', value: false },
  //   { status: 'unchanged', key: 'host', value: 'hexlet.io' },
  //   { status: 'deleted', key: 'proxy', value: '123.234.53.22' },
  //   { status: 'changed', key: 'timeout', oldValue: 50, newValue: 20 },
  //   { status: 'added', key: 'verbose', value: true }
  // ]
  const formatDiff = stylish(dataDiff);
  console.log(formatDiff);
};

export default genDiff;
