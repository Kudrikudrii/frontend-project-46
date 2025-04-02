import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
/* eslint-disable no-undef */
import { test, expect, describe, it } from '@jest/globals';
import getPlainFormat, { getPaths } from '../src/formatters/plain.js';
import getStylishFormat from '../src/formatters/stylish.js';
import getDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (file) => path.join(__dirname, '..', '__fixtures__', file);
const readFile = (file) => fs.readFileSync(getFixturePath(file), 'utf-8');

test('JSON diff float files in stylish format', () => {
  expect(getDiff(getFixturePath('file1.json'), getFixturePath('file2.json'))).toEqual(readFile('result.txt').trim());
});
test('JSON diff nested files in stylish format', () => {
  expect(getDiff(getFixturePath('file3.json'), getFixturePath('file4.json'))).toEqual(readFile('result2.txt').trim());
});
test('yml diff float files in stylish format', () => {
  expect(getDiff(getFixturePath('file1.yml'), getFixturePath('file2.yml'))).toEqual(readFile('result.txt').trim());
});
test('yml diff nested files in stylish format', () => {
  expect(getDiff(getFixturePath('file3.yml'), getFixturePath('file4.yml'))).toEqual(readFile('result2.txt').trim());
});
test('JSON diff nested files in plain format', () => {
  expect(getDiff(getFixturePath('file3.json'), getFixturePath('file4.json'), 'plain')).toEqual(readFile('plainResult.txt').trim());
});
test('yml diff nested files in plain format', () => {
  expect(getDiff(getFixturePath('file3.yml'), getFixturePath('file4.yml'), 'plain')).toEqual(readFile('plainResult.txt').trim());
});
test('yaml diff nested files in plain format', () => {
  expect(getDiff(getFixturePath('file3.yaml'), getFixturePath('file4.yaml'), 'plain')).toEqual(readFile('plainResult.txt').trim());
});

test('JSON diff nested files in json format', () => {
  expect(getDiff(getFixturePath('file3.json'), getFixturePath('file4.json'), 'json')).toEqual(readFile('jsonResult.txt').trim());
});
test('yml diff nested files in json format', () => {
  expect(getDiff(getFixturePath('file3.yml'), getFixturePath('file4.yml'), 'json')).toEqual(readFile('jsonResult.txt').trim());
});
test('yaml diff nested files in json format', () => {
  expect(getDiff(getFixturePath('file3.yaml'), getFixturePath('file4.yaml'), 'json')).toEqual(readFile('jsonResult.txt').trim());
});

describe('getStylishFormat with unknown status', () => {
  test('should return "Unknown type: ..." for unknown status', () => {
    const invalidData = [
      {
        key: 'testKey',
        status: 'invalidStatus',
        value: 'testValue',
      },
    ];

    const result = getStylishFormat(invalidData);
    expect(result).toMatch(/Unknown type: invalidStatus/);
  });
});

describe('getPlainFormat with unknown status', () => {
  test('should return "Unknown type: ..." for unknown status', () => {
    const invalidData = [
      {
        key: 'testKey',
        status: 'invalidStatus',
        value: 'testValue',
      },
    ];

    const result = getPlainFormat(invalidData);
    expect(result).toMatch(/Unknown type: invalidStatus/);
  });
});

describe('getPaths', () => {
  it('should return simple key when no parentName provided', () => {
    expect(getPaths('key')).toBe('key');
  });

  it('should join parentName and key with dot', () => {
    expect(getPaths('nestedKey', 'parent')).toBe('parent.nestedKey');
    expect(getPaths('deepKey', 'parent.nested')).toBe('parent.nested.deepKey');
  });
});
