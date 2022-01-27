//revisao

let listaNomes = ['Ale', 'Felipe', 'Gabi']

//FOR IN

console.log('--- FOR IN ---')
for (let indice in listaNomes){
    console.log(indice);
}
console.log()

//FOR OF

console.log('--- FOR OF ---')
for (let valor of listaNomes){
    console.log(valor);
}
console.log()

//FOR INDEXADO

console.log('--- FOR INDEXADO ---')
for (let i = 0; i < listaNomes.length;i++){
    console.log(`${i} - ${listaNomes[i]}`)
}