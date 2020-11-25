export {testRunner};
import test from 'ava';
import {parse, stringify} from '../../src/index.js';
import {loadFileFromString} from './load-from-string.js';


const testRunner = function(testObject) {
  const {
    string,
    data,
    type,
    filename = `data.${type}`,
    prettyString,
    malformed,
    skip = {},
  } = testObject;

  if (!skip.parse) {
    test(`parse(string, type)`, (t) => {
      t.deepEqual(parse(string, type), data);
    });

    test(`parse(prettyString, type)`, (t) => {
      t.deepEqual(parse(prettyString, type), data);
    });

    if (malformed) {
      test(`parse(malformed, type)`, (t) => {
        t.throws(() => {
          parse(malformed, type);
        });
      });
    }
  }

  test(`load(filename)`, (t) => {
    t.deepEqual(loadFileFromString(string, filename), data);
  });


  test(`load(filename, type)`, (t) => {
    if (type === `esm`) {
      t.throws(function () {
        return loadFileFromString(string, `data.xml`, type);
      });
    } else {
      t.deepEqual(loadFileFromString(string, `data.xml`, type), data);
    }
  });

  if (malformed) {
    test(`load(malformed)`, (t) => {
      t.throws(() => {
        loadFileFromString(malformed, filename, type);
      });
    });
  }

  test(`stringify(data)`, (t) => {
    t.is(stringify(data), JSON.stringify(data));
  });

  test(`stringify(data, type)`, (t) => {
    t.is(stringify(data, type), string);
  });

  test(`stringify(data, true)`, (t) => {
    t.is(stringify(data, true), JSON.stringify(data, null, 2));
  });

  test(`stringify(data, {type, pretty: true})`, (t) => {
    t.is(stringify(data, {type, pretty: true}), prettyString);
  });
};

