var sum = (a,b) => a+b;

var response = prompt('dime tu edad');

var age = Number(response);


if(!isNaN(age) && age > 18) {
    alert(' Bienvenido a mi web,disfruta.');
}else{
    alert('Lo siento,eres menor vete a tu casa');
}

// if(isNaN(age) || age < 18) {
//     alert('Lo siento,eres menor vete a tu casa');
// }else{
//     alert(' Bienvenido a mi web,disfruta.');
// }


// esto sirve para mostrar un texto en la consola de las dev tools
// console.log('hola hackers');
// console.log(sum(23,23));