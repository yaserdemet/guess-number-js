const hak = document.querySelector(".hak");
const clue = document.querySelector(".clue");
const result  = document.querySelector(".result");
const input = document.querySelector("input");
const button = document.querySelector("button");

const container = document.querySelector(".container");
const qm = document.querySelector(".qm");
const row = document.querySelector(".row");
const randomNumber = Math.floor(Math.random() * 100);

let x  = 5
console.log(randomNumber);


window.onload = qm.classList.add("qm1")
window.onload = button.classList.add("qm2")
window.onload = input.classList.add("qm2")
window.onload = button.classList.add("qm2")
window.onload = row.classList.add("row2")


const checker = function () {
    // const userInput = input.value;
    if(input.value > 100 || input.value < 0 ) {
        alert("Please enter a number between 1 and 100");
    }

    else {


        if (x > 0){



            if(input.value > randomNumber){
                clue.innerHTML = "YOUR GUESS IS TOO HIGH !";
                x --;
                hak.innerHTML = `YOU HAVE ${x} GUESS LEFT`;

                if(x < 3){
                    hak.style.color = "red";
                    hak.innerHTML += " <br> YOU ARE RUNNING OUT OF GUESSES"; 
                }
        
        
            }

            else if ( input.value < randomNumber){
                clue.innerHTML = "YOUR GUESS IS TOO LOW !";
                x --;
                hak.innerHTML = `YOU HAVE ${x} GUESS LEFT !`;
                if(x < 3){
                    hak.style.color = "red";
                    hak.innerHTML += " <br> YOU ARE RUNNING OUT OF GUESSES"; 
                }
            }
            
        
            else if (input.value == randomNumber) {
                

                container.style.backgroundColor = "green";
                result.innerHTML = "YOU WON!";
                clue.innerHTML = "";
                x --;
                hak.innerHTML = `YOU HAVE ${x} GUESS LEFT !`;

                 button.disabled = true;
                 if(x < 3){
                    hak.style.color = "red";
                    hak.innerHTML += " <br> YOU ARE RUNNING OUT OF GUESSES"; 
                }
        
            }
        }
    


        else {
           
            container.style.backgroundColor = "red";
            
            result.innerHTML = " YOU LOST!";
             button.disabled = true;
        }

        }



    }



button.addEventListener("click" , checker);


input.addEventListener("keydown" , (e) => {
    // eğer e.code yerine e.keyCode == 13 yazılsaydı numpad teki enter da çalışacaktır.
   if(e.code == "Enter"){
         checker();
   }
})

 
      
    

    
