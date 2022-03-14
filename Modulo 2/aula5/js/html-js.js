// no js "document" é uma palavra reservada, que quando ligado a HTML [?...]


//getElementsByTagName pega o elemtno pela tag (h1,h2, fiv header...)
/*let h1 = document.getElementsByTagName('h1')*/

// console.log(h1)

//get getElementById pega o elemtno pela id (nome que eu denomino)

let h2 = document.getElementById('helloworld')

// console.log(helloworld.innerHTML = 'tudo bem?')

/*h2.className='tudobem?'

console.log(h2)*/


//get getElementsByClassName pega o elemtno pela class (nome que eu denomino)

/*let h2Class = document.getElementsByClassName('class-hello-world');
console.log(h2Class[0], h2Class[1])*/

//querySelector

//por tag
let h1QuerySelector = document.querySelector('h1')
// console.log(h1QuerySelector)

//por id
let h2QuerySelector = document.querySelector('#helloworld')
// console.log(h2QuerySelector)

//por class
let h2ClassSelector = document.querySelector('.class-hello-world')
// console.log(h2ClassSelector)

let h2Composto = document.querySelectorAll('class-hello-world');

/**************************/
let h1TagColor = document.querySelector('#mudacor');
// console.log(h1TagColor.style)
h1QuerySelector.style.color = 'blue'

/********************** */

//eventListener - "escutam" evbentos para a partir dele executar funcoes

function handleEvent(){
    // h1QuerySelector.style.color = "red";
    if(h1QuerySelector.style.color == 'blue'){
        h1QuerySelector.style.color='pink';
    }else{
        h1QuerySelector.style.color='blue';
    }
}

// h2.addEventListener('click',handleEvent)

let imgAleatorias = [
    'https://upload.wikimedia.org/wikipedia/commons/e/e5/Animals_As_Leaders_-_2014_NAMM_Show.jpg',
    'https://i.scdn.co/image/ab6761610000e5ebe0a5f7cfc2a82ebd6d283a0c',
    'http://coverbaixo.com.br/site/wp-content/uploads/2019/06/periphery-770x385.jpg'
]

let img = document.querySelector('#imgMuda');

function handleFoto(){
    
    let index = (Math.floor(3*Math.random()));
    img.style.widght = '200px';
    img.style.height = '200px';
    img.src = imgAleatorias[index]

}

let input = document.querySelector('#inputTexto');

function handleInput(){
    console.log(input.value)
}


