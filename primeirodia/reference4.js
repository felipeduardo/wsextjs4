

var a = {
    nome : 'Zaedy'
};

var b = a;

console.info(a === b);

a = {
    nome : 'Wesley'
};

console.info(a === b);