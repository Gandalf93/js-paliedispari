// Palidroma - Chiedere all’utente di inserire una parola. Creare una funzione per capire se la parola inserita è palindroma

var array = prompt('scrivi una parola');
console.log(array);

var lettere = array.split('');
console.log(lettere);

const reversed =  lettere.reverse();
console.log(reversed);

 var arrayContr = reversed.join('');
 console.log(arrayContr);

var pal = palindroma(array, arrayContr)
console.log(pal);


  function palindroma(a,b) {
    
       if( a === b){
           return 'la parola è palindroma';
       }else{
           return 'la parola non è palindroma';
       }
    }

    
    // Pari e Dispari - L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri. Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.
    
    
    
    var domanda = prompt('numero pari o numero dispari?');
    console.log(domanda);
    
    var num = parseInt(prompt('scrivi un numero da 1 a 5'));
    console.log('utente', num);
    
    var numComp = randomNum(1, 5);
    console.log('pc', numComp);
    
    var risultatoSomma = somma(num, numComp);
    console.log('somma', risultatoSomma);

    var  evenUneven = parDis(risultatoSomma);
    
    if(domanda == evenUneven){
        var vince = 'vince l\'utente';
    }else {
            vince = 'vince il pc';
    }
    
    console.log(vince);
    
    
    function randomNum(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
      }
    
    function somma(a, b) {
        return risultato = a + b;
    }
         
    function parDis(sum) {
        if (sum % 2 == 0){
            return 'pari';
        }else{
            return 'dispari';
        }
    }
    
        

    
   
    
      
    
 






