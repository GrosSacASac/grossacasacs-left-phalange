import { Core, useDefaultLogging } from "../../node_modules/@eroc/core/dist/core.es.js";

import * as d from "./dependencies.js";

import * as convert from "./convert.js";


const core = new Core();
useDefaultLogging(core);


(async () => {
    await core.start(convert);

    // here executes before dom99 went through
    // here you cannot use d.elements
    d.start({
        initialFeed: {
            options: ["yaml", "json", "toml", "ini"].map(option => {
                return {
                    textContent: option,
                    value: option
                }
            }),
            inputType: "json",
            outputType: "yaml",
            input: `{"example": "json"}`
        },
    });

    // executes after dom99 went through
    // here you can use d.elements
})();
