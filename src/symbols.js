export {openedSymbol, tryAddSource};

const openedSymbol = Symbol();



const tryAddSource = (source, result)  => {
    if (typeof result === `object`) {
        result[openedSymbol] = source;
    }
    return result;
};
