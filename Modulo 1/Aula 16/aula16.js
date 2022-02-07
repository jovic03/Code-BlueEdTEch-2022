const prompt = require('prompt-sync')();

let array = ['Gabriel',20,'Londrina'];

let objeto = {
    nome:'Gabriel',
    idade: 20,
    cidade:'Londrina',

    mudacidade: function(nova){
        this.cidade = nova
    },

    bio: function(){
        console.log(`o nome é ${this.nome}, tem anos e mora em`)
    }


}

objeto.bio();

objeto.mudacidade('Peruibe');
console.log();

objeto.bio();