// Crea un array di oggetti che rappresentano degli animali.
// Ogni animale ha un nome, una famiglia e una classe.
// Crea un nuovo array con la lista dei mammiferi.

const animals = [
    { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
    { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
    { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
    { nome: 'tigre', famiglia:'felidi', classe: 'mammiferi'},
    { nome: 'gabbiano', famiglia: 'fasiandi', classe:'ucceli'},
    { nome: 'fagiano', famiglia: 'fasianidi', classe:'ucceli'},
    { nome: 'iena', famiglia: 'canidi', classe:'mammiferi'}
]

console.log(animals);

const mammiferi = animals.filter( animal => animal.classe == 'mammiferi')

console.log(mammiferi);