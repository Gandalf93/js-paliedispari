// Palidroma - Chiedere all’utente di inserire una parola. Creare una funzione per capire se la parola inserita è palindroma



// creo un array vuoto, poi ci inserisco il prompt.  con il ciclo for prendo la parola nell'array e faccio i--
function palindroma() {
    var array = prompt('scrivi una parola');
    var lettere = array.split('');
    console.log(lettere);
    const reversed =  lettere.reverse();
    console.log(reversed);
     var arrayContr = reversed.join('');
     console.log(arrayContr);

     if( array === arrayContr){
         var outcome = 'la parola è palindroma';
     }else{
         var outcome = 'la parola non è palindroma';
     }

     console.log(outcome);
    }
    
    
        console.log(palindroma());
    
 
        // function prova() {
            // return array.split('').reverse().join('');
        // }



// Pari e Dispari - L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri. Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.