import getStylishFormat from './stylish.js';
import getPlainFormat from './plain.js';

const formatters = {
  stylish: getStylishFormat,
  plain: getPlainFormat,
};

const formatter = (format) => formatters[format];

export default formatter;
