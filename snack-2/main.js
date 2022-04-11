// A partire da un array di stringhe, 
// crea un secondo array formattando 
// le stringhe del primo array in minuscolo e con 
// l’iniziale maiuscola.









const anime = ['naruto','boruto','baki','bleach']

const letters = [uppercase(anime)]

console.log(letters)

function uppercase (array){
    return array.map(element =>{
        return element.charAt(0).toUpperCase() + element.substring(1).toLowerCase()
    })
}
