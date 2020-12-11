var name = prompt('Qual è il tuo nome?');
var surname = prompt('Qual è il tuo cognome?');
var age = prompt('Quanti anni hai, ' + name + ' ' + surname + '?');
var currentYear = new Date().getFullYear();
var birthYear = currentYear - age;
var favouriteColor = prompt('Qual è il tuo colore preferito?');

console.log("I dati dell'utente sono:\nNome: " + name + ';\nCognome: ' + surname + ';\nEtà: ' + age + ';\nAnno di nascita: ' + birthYear + ';\nColore preferito: ' + favouriteColor + '.');

var userData = document.getElementById('userdata');
userData.innerText = 'Ciao,';
userData.append('\nI tuoi dati sono:');
userData.append('\nNome: ' + name + ';');
userData.append('\nCognome: ' + surname + ';');
userData.append('\nEtà: ' + age + ';');
userData.append('\nAnno di nascita: ' + birthYear + ';');
userData.append('\nColore preferito: ' + favouriteColor + '.');

if (name === '' || surname === '' || age === '' || birthYear === '' || favouriteColor === '') {
  alert('You cannot leave an empty field! Please repeat the procedure.');
  userData.innerHTML = '<div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-weight: bold; font-size: 50px;"><span style="padding-right: 100px; color:red;">Failed</span><a style="padding: 20px; border: 2px dashed black; border-radius: 100%; background-color: lightgreen; cursor: pointer;" onclick="window.location.reload();">Reload</a></div>';
}
