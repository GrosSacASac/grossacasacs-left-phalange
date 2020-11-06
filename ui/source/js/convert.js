export { start };
import * as d from "./dependencies.js";
import {parse, stringify} from "./dependencies.js";
import {  } from "./settings.js";

const convert = function (event) {
    if (event) {
        event.preventDefault();
    }
    const input = d.get(`input`);
    const inputType = d.get(`inputType`);
    const outputType = d.get(`outputType`);

    const inputObject = parse(input, inputType);
    const result  = stringify(inputObject, outputType);
    d.feed(`output`, result);
};

const start = function () {
    d.functions.convert = convert;
};
