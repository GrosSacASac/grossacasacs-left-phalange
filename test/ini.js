import { testRunner } from './helpers/test-runner.js';

let iniLineFeed;
if (process.platform === `win32`) {
  iniLineFeed = `\r\n`;
} else {
  iniLineFeed = `\n`;
} 
const data = {left: `phalange`};

const testObject = {
  type: `ini`,
  data,
  string: `left=phalange${iniLineFeed}`,
  prettyString: `left = phalange${iniLineFeed}`,
};

testRunner(testObject);
