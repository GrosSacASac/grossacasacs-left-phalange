import { Core, useDefaultLogging } from "../../node_modules/@eroc/core/dist/core.es.js";

import * as d from "./dependencies.js";

import * as convert from "./convert.js";


const core = new Core();
useDefaultLogging(core);


(async () => {
    await core.start(convert);

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
            input: `{"example": "json"}`,
            compact: false,
        },
    });
})();
