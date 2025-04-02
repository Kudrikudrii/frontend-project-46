import _ from 'lodash';

const treeBuilder = (data1, data2) => {
  const sortedKeys = _.sortBy(Object.keys({ ...data1, ...data2 }));

  const getTree = sortedKeys.map((key) => {
    const oldValue = data1[key];
    const newValue = data2[key];

    if (_.isObject(data1[key]) && _.isObject(data2[key])) {
      return { status: 'nested', key, children: treeBuilder(data1[key], data2[key]) };
    }

    if (Object.hasOwn(data1, key) && Object.hasOwn(data2, key) && data1[key] !== data2[key]) {
      return { status: 'updated', key, oldValue, newValue };
    }

    if (!Object.hasOwn(data1, key) && Object.hasOwn(data2, key)) {
      return { status: 'added', key, value: newValue };
    }

    if (Object.hasOwn(data1, key) && Object.hasOwn(data2, key) && data1[key] === data2[key]) {
      return { status: 'unchanged', key, value: oldValue };
    }

    return { status: 'removed', key, value: oldValue };
  });
  return getTree;
};
export default treeBuilder;
