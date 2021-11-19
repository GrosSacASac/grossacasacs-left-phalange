import test from 'ava';

import {parse, openedSymbol} from '../src/index.js';
import {loadFileFromString} from './helpers/load-from-string.js';
import {loadFileFromStringExtensionLess} from './helpers/load-from-stringExtensionLess.js';
import { deepEqual } from "utilsac/deep.js";

test(`parse(data)`, (t) => {
  t.true(deepEqual(
    parse(`left = phalange`),
    parse(`left = phalange`, {type: `yaml`}),
  ));
});

test(`load('data.xml')`, (t) => {
  t.throws(() => {
    loadFileFromString(`left: [phalange`, `data.xml`);
  });

  t.true(deepEqual(
    loadFileFromString(`left = phalange`, `data.yml`),
    parse(`left = phalange`),
  ));
});

test(`load without specifiying extension`, (t) => {
  const jsonString = `{"a": "b"}`;
  t.true(deepEqual(
    loadFileFromStringExtensionLess(jsonString, `data.yml`),
    parse(jsonString, `json`),
  ));
});

test(`get source file after loading without specifiying extension`, (t) => {
  const jsonString = `{"a": "b"}`;
  t.true(
    loadFileFromStringExtensionLess(jsonString, `data.yml`)[openedSymbol].endsWith(`data.yml`),
  );
});
