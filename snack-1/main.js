//Crea un array composto da 10 automobili.
//Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
//Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
//Infine stampa separatamente i 3 array.

const cars = [
{
    marca: 'Fiat',
    modello: 'Panda',
    alimentazione: 'gpl'
},
{
    marca: 'Porche',
    modello: 'Panamera',
    alimentazione: 'Benzina'
},
{
    marca: 'Ferrari',
    modello: 'Laferrari',
    alimentazione: 'Benzina'
},
{
    marca: 'Suzuki',
    modello: 'Vitara',
    alimentazione: 'Diesel'
},
{
    marca: 'Ford',
    modello: 'Mustang mach-e',
    alimentazione: 'Elettrico'
},
{
    marca: 'Volswagen',
    modello: 'Polo',
    alimentazione: 'Benzina'
},
{
    marca: 'Fiat',
    modello: 'Punto',
    alimentazione: 'Metano'
},
{
    marca: 'Bmw',
    modello: 'i460',
    alimentazione: 'Elettrico'
},
{
    marca: 'Audi',
    modello: 'Rs6',
    alimentazione: 'Benzina'
},
{
    marca: 'Lamborghini',
    modello: 'Sesto elemento',
    alimentazione: 'Benzina'
}
    
]

const array_benzina = cars.filter(cars => {
    if(cars.alimentazione === 'Benzina'){
        return 'Benzina'
    }
    
})  
console.log(array_benzina)


const array_diesel = cars.filter(cars => {
    if(cars.alimentazione === 'Diesel'){
        return 'Diesel'
    }
    
})  
console.log(array_diesel)



const array_notlist = cars.filter(cars => cars.alimentazione !== 'Benzina' && cars.alimentazione !== 'Diesel')
 
console.log(array_notlist)


       
