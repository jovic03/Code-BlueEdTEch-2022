"use strict";
/*
npm init (inica ambiente de codar)
npm install -D typescript (inica ambiente de codar)
npx tsc --init (inica ambiente de codar)
npx tsc (traduz pra js o codigo, toda vez rodar ele antes)
node index.js (quem de fato vai rodar)

package.json deve ficar:
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start":"node index.js",*****
    "build":"npx tsc",*****
    "build-and-run":"npm run build && npm start"*****
  },


npm *run* build pra rodar o build (nao somente npm build como é com npm star)
*/
const HarryPotter = {
    titulo: "Harry Potter 8",
    lancamento: 2013
};
console.log(HarryPotter);
