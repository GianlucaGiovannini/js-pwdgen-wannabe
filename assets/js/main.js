// Generatore di password automatico



// Chiedere all'utente il suo nome
const pswName = prompt("scrivi il tuo nome")
console.log(pswName);

// chiedere il suo cognome
const pswLastName = prompt("scrivi il tuo cognome")
console.log(pswLastName);

// chiedere il suo colore preferito
const pswColor = prompt("scrivi il tuo colore preferito")
console.log(pswColor);

// Chiedere all'utente il nome del suo migliore amico
const pswFriendName = prompt("scrivi il nome del tuo migliore amico")
console.log(pswFriendName);

// chiedere il suo cognome
const pswAnimal = prompt("scrivi un nome / tipo di animale")
console.log(pswAnimal);

// chiedere il suo colore preferito
const pswAge = prompt("Quanti anni hai ?")
console.log(pswAge);

// stampare sulla pagina la password
document.getElementById("password_complete").innerHTML = pswName + pswLastName + pswColor + 22;
console.log(password_complete)

// stampare sulla pagina la password media
document.getElementById("psw2_complete").innerHTML = `00${pswName}11${pswLastName}22${pswColor}33`;
console.log(psw2_complete)

// stampare sulla pagina la password avanzata ed aggiungere delle varianti con Let che modificano le Const
let psw1Name = "." + 00 + pswName + 22;
console.log(psw1Name);

let psw1LastName = pswLastName + 33;
console.log(psw1LastName);

let psw1Color = pswColor + "stringa" + "./" + 22;
console.log(psw1Color);

document.getElementById("psw3_complete").innerHTML = `${psw1Name}${psw1LastName}${psw1Color}`;
console.log(psw2_complete)


// Stampare sulla pagina la password ESTREMA

document.getElementById("psw4_complete").innerHTML = `${".!"}${pswName}${"/"}${pswLastName}30${pswColor}${"^"}${pswFriendName}087${pswAnimal}${"+"}${pswAge}`;
console.log(psw2_complete)