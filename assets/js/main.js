// Generatore di password automatico



// Chiedere all'utente il suo nome
const pswName = prompt("scrivi il tuo nome?")
console.log(pswName);

// chiedere il suo cognome
const pswLastName = prompt("scrivi il tuo cognome?")
console.log(pswLastName);

// chiedere il suo colore preferito
const pswColor = prompt("il tuo colore preferito ?")
console.log(pswColor);

// stampare sulla pagina la password
document.getElementById("password_complete").innerHTML = pswName + pswLastName + pswColor + 22;
console.log(password_complete)

// stampare sulla pagina la password media
document.getElementById("psw2_complete").innerHTML = `0${pswName}1${pswLastName}2${pswColor}3`;
console.log(psw2_complete)

let psw1Name = pswName + 22;
console.log(psw1Name);

let psw1LastName = pswLastName + 33;
console.log(psw1LastName);

let psw1Color = pswColor + "stringa" + "./";
console.log(psw1Color);

document.getElementById("psw3_complete").innerHTML = `${psw1Name}${psw1LastName}${psw1Color}`;
console.log(psw2_complete)