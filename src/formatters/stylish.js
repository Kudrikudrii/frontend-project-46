const formatValue = (value, depth) => {
  if (typeof value !== 'object' || value === null) {
    return String(value);
  }
  const currentIndent = ' '.repeat(depth * 4);
  const lines = Object.entries(value).map(([key, value]) => `${currentIndent}    ${key}: ${formatValue(value, depth + 1)}`);

  return `{\n${lines.join('\n')}\n${currentIndent}}`;
};

const getStylishFormat = (tree, depth = 1) => {
  const indent = ' '.repeat(depth * 4 - 4);
  const result = tree.flatMap((node) => {
    switch (node.status) {
      case 'nested':
        return `${indent}    ${node.key}: ${getStylishFormat(node.children, depth + 1)}`;
      case 'removed':
        return `${indent}  - ${node.key}: ${formatValue(node.value, depth)}`;
      case 'added':
        return `${indent}  + ${node.key}: ${formatValue(node.value, depth)}`;
      case 'updated':
        return [`${indent}  - ${node.key}: ${formatValue(node.oldValue, depth)}`, `${indent}  + ${node.key}: ${formatValue(node.newValue, depth)}`].join('\n');
      case 'unchanged':
        return `${indent}    ${node.key}: ${formatValue(node.value, depth)}`;
      default:
        return `Unknown type: ${node.status}`;
    }
  });
  return `{\n${result.join('\n')}\n${indent}}`;
};

export default getStylishFormat;
