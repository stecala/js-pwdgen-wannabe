const userName = prompt('Inserisci il tuo nome');
const userSurname = prompt('Inserisci il tuo cognome');
const userColor = prompt('Inserisci il tuo colore preferito');
if( userName.length <= 3 || userSurname.length <= 2 )
{
    alert('nome o cognome troppo corto')
}
else
{
    document.getElementById('password').innerHTML = userName + userSurname + userColor + 22;
}
