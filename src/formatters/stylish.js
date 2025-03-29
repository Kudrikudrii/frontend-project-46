import _ from 'lodash';

const stringify = (value, depth) => {
  if (!_.isObject(value)) {
    return String(value);
  }
  const currentIndent = ' '.repeat(depth * 4);
  const lines = Object.entries(value).map(
    ([key, value]) => `${currentIndent}    ${key}: ${stringify(value, depth + 1)}`
  );

  return `{\n${lines.join('\n')}\n${currentIndent}}`;
};

const stylish = (arrData, depth = 1) => {
  const indent = ' '.repeat(depth * 4 - 4);
  const result = arrData.flatMap((key) => {
    const status = key.status;
    switch (status) {
      case 'nested':
        return `${indent}    ${key.key}: ${stylish(key.children, depth + 1)}`;
      case 'deleted':
        return `${indent}  - ${key.key}: ${stringify(key.value, depth)}`;
      case 'added':
        return `${indent}  + ${key.key}: ${stringify(key.value, depth)}`;
      case 'changed':
        return [
          `${indent}  - ${key.key}: ${stringify(key.oldValue, depth)}`,
          `${indent}  + ${key.key}: ${stringify(key.newValue, depth)}`,
        ].join('\n');
      case 'unchanged':
        return `${indent}    ${key.key}: ${stringify(key.value, depth)}`;
      default:
        return `Unknown type: ${status}`;
    }
  });
  return `{\n${result.join('\n')}\n${indent}}`;
};

export default stylish;

// const stylish = (arrData) => {

//   const result = arrData.flatMap((key) => {
//     const status = key.status;
//     switch (status) {
//       case 'deleted':
//         return `  - ${key.key}: ${key.value}`;
//       case 'added':
//         return `  + ${key.key}: ${key.value}`;
//       case 'changed':
//         return [`  - ${key.key}: ${key.oldValue}`, `  + ${key.key}: ${key.newValue}`];
//       default:
//         return `    ${key.key}: ${key.value}`;
//     }
//   });
//   return `{\n${result.join('\n')}\n}`;
// };
// export default stylish;
