// Crea un array di oggetti che rappresentano delle persone.
// Ogni persona ha un nome, un cognome e un’età.
// Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.


const people = [
    { name: 'Davide' , cognome: ' Ferraro', età: '22' },
    { name: 'Alberto' , cognome: ' Nonloso', età: '78' },
    { name: 'Genny' , cognome: ' Acaso', età: '12' },
    { name: 'Naruto' , cognome: ' Okage', età: '37' },
    { name: 'Boruto' , cognome: ' Okage', età: '14' },
    { name: 'Maria' , cognome: ' Bonpani', età: '120' },
    { name: 'Lucifer' , cognome: ' Lucifer', età: '999' }
]


console.log(people)

let Status = []

let yesDrive = people.filter((person) =>{
    if(person.età > 18){
        Status.push(`${person.name}${person.cognome} YES YOU CAN DRIVE`)
        return true
    }

    Status.push(`${person.name}${person.cognome} NO YOU CAN'T DRIVE`)
})

console.log(Status)