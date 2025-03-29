const stylish = (arrData) => {
  const result = arrData.flatMap((key) => {
    const status = key.status;
    switch (status) {
      case 'deleted':
        return `  - ${key.key}: ${key.value}`;
      case 'added':
        return `  + ${key.key}: ${key.value}`;
      case 'changed':
        return [`  - ${key.key}: ${key.oldValue}`, `  + ${key.key}: ${key.newValue}`];
      default:
        return `    ${key.key}: ${key.value}`;
    }
  });
  return `{\n${result.join('\n')}\n}`;
};
export default stylish;
