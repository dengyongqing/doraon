let currying = function(fn) {
    let args = [].slice.call(arguments, 1);
    return function() {
        let newArgs = args.concat([].slice.call(arguments));
        return fn.apply(null, newArgs);
    };
};