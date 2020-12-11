var name = prompt("Qual è il tuo nome?");
var surname = prompt("Qual è il tuo cognome?");
var favouriteColor = prompt("Qual è il tuo colore preferito?");

document.getElementById('password').innerText = name + surname + favouriteColor + new Date().getFullYear();
