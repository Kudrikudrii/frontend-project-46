const valueUpdate = (value) => {
  if (typeof value === 'object') {
    return '[complex value]';
  }
  if (typeof value === 'string' || value === null) {
    return `'${value}'`;
  }
  return value;
};

export const getPaths = (key, parentName = '') => (parentName ? `${parentName}.${key}` : key);

const getPlainFormat = (tree, parentName = '') => {
  const lines = tree.flatMap((node) => {
    const updatedPath = getPaths(node.key, parentName);

    switch (node.status) {
      case 'nested':
        return getPlainFormat(node.children, updatedPath);
      case 'unchanged':
        return [];
      case 'removed':
        return `Property '${updatedPath}' was removed`;
      case 'added':
        return `Property '${updatedPath}' was added with value: ${valueUpdate(node.value)}`;
      case 'updated':
        return `Property '${updatedPath}' was updated. From ${valueUpdate(node.oldValue)} to ${valueUpdate(node.newValue)}`;
      default:
        return `Unknown type: ${node.status}`;
    }
  });
  return lines.join('\n');
};

export default getPlainFormat;
