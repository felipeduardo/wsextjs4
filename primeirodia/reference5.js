

var a = {
    nome : 'Zaedy'
};

var b = {
    nome : a.nome
};

console.info(a === b);
console.info(a.nome === b.nome);

a.nome = 'Wesley';

console.dir(a);
console.dir(b);

console.info(a.nome === b.nome);

