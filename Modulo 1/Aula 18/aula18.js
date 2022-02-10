const prompt = require('prompt-sync')();

//Async / Await


//Async
/*
async function funcaoAsync(){
    return 'Blue';
}

funcaoAsync().then(console.log);//1° chamei a funcao, depois do retorno da o consoleLog 
*/

//Await
/*
async function saudacao() {
    let promise = new Promise(resolve => {
      setTimeout(() => resolve('Olá!'), 3000);
    });

    let escrever = await promise;
    console.log(escrever);
}

saudacao()
*/

/*
Tente executar o código sem o await, você perceberá que o resultado é outro, porque a promise ainda não foi resolvida! Com o await nós podemos fazer com que a função espere a resposta da promise, para apenas depois disso continuar com a execução.
Se uma promise for resolvida normalmente, então await promise retorna o resultado. Mas no caso de uma reject, ele lança o erro, como se houvesse uma declaração de throw naquela linha.
*/

async function erro() {
    try {
     var z = await Promise.reject('Deu erro!');
    } catch(e) {
     console.log(e);
    }
}
  
erro();