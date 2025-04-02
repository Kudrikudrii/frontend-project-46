import getStylishFormat from './stylish.js';
import getPlainFormat from './plain.js';
import getJsonFormat from './json.js';

const formatters = {
  stylish: getStylishFormat,
  plain: getPlainFormat,
  json: getJsonFormat,
};

const formatter = (format) => formatters[format];

export default formatter;
