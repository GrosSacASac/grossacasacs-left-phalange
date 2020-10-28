// import { parse } from "../../src/index.js";
import { parse } from "../../dist/browser.js";

const yamls = `---
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
const tomls = `
# This is a TOML document

title = "TOML Example"

[owner]
name = "Tom Preston-Werner"
dob = 1979-05-27T07:32:00-08:00

[database]
enabled = true
ports = [ 8001, 8001, 8002 ]
data = [ ["delta", "phi"], [3.14] ]
temp_targets = { cpu = 79.5, case = 72.0 }

[servers]

[servers.alpha]
ip = "10.0.0.1"
role = "frontend"

[servers.beta]
ip = "10.0.0.2"
role = "backend"
`
console.log(parse(yamls, `yaml`));
console.log(parse(tomls, `toml`));

