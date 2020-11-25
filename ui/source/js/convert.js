export { start };
import * as d from "./dependencies.js";
import {parse, stringify} from "./dependencies.js";


const convert = function (event) {
    if (event) {
        event.preventDefault();
    }
    const input = d.get(`input`);
    const inputType = d.get(`inputType`);
    const outputType = d.get(`outputType`);
    const compact = d.get(`compact`);

    let result;
    let inputObject;
    try {
        inputObject = parse(input, inputType);
        result  = stringify(inputObject, {
            type: outputType,
            pretty: !compact,
        });
    } catch (error) {
        result = `Error: probably invalid ${inputType} input,
        ${error.toString()} `;
    }
    d.feed(`output`, result);
};

const start = function () {
    d.functions.convert = convert;
};
