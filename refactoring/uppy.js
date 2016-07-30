function getFnName(fn) {
    var f = typeof fn === 'function'
    var s = f && ((fn.name && ['', fn.name]) || fn.toString().match(/function ([^\(]+)/))
    return (!f && 'not a function') || (s && s[1] || 'anonymous')
}

function test() {
    return 'test';
}

console.log(getFnName('funcion'))
console.log(getFnName(function() {
    return true;
}));
console.log(getFnName(test));
