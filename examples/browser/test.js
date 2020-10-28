// import { parse } from "../../src/index.js";
import { parse } from "../../src/parse.js";

const s = `---
defaultLang: fr
defaultAuthor: Cyril Walle
defaultLicense: CC-BY-NC-4.0
mainTitle: "\U0001F392"
tabTitle: Le sac
subTitle: Software, Culture, Politics
categories:
- tag: travel
  name: Travel
- tag: luxembourg
- tag: europe
`

console.log(parse(s, `toml`));