
let userscore = document.getElementById("userScoreVal").value;
let computerscore = document.getElementById("compScoreVal").value;

let userresult = document.querySelectorAll(".choices");

userresult.forEach((event)=>{
    event.addEventListener("click",()=>{
        const pinput = this.textContent;
        const computerOptions = ["r" , "p" , "s"];
        const cinput = computerOptions[Math.floor(Math.random()*computerOptions.length())];

        compareinput(pinput , cinput);
    })
})

function compareinput( pinput , cinput){
    const currentMatch = `${pinput} v/s ${cinput}`;

    // tie round;
    if(pinput == cinput){
        alert(`Tie round`)  ||| TIE ROUNDS 
    }

    // Rock
    if(pinput == "r"){
        if(cinput == "s"){
            userscore++;
            let winner = document.getElementById("result-final-stat").innerText;

        }
        else{
            SCISSORS WINS  || COMPUTER WON
        }
    }

    // Scissors
    if(pinput == "s"){
        if(cinput == "p"){
            SCISSORS WINS || USER WON
        }
        else{
            ROCK WINS || COMPUTER WON
        }
    }

    // Paper
    if(pinput == "p"){
        if(cinput == "s"){
            SCISSORS WINS || USER WON
        }
        else{
            ROCK WINS || COMPUTER WON
        }
    }
}





userresult.forEach((element) => {
    element.addEventListener("click", () => {
        const pinput = this.textContent;
        // let userSelection  = val.currentTarget.classList;
        // if(userSelection.contains("r")){
        //     userresult = document.getElementById("r");
        // }
        // else if(userSelection.contains("p")){
        //     userresult = document.getElementById("p")
        // }
        // else{
        //     userresult = document.getElementById("s");
        // }
    });
});


let rockpaperscissor = 'rpc';
let systemresult = rockpaperscissor[Math.floor(Math.random()*rockpaperscissor.length)];




// btns.forEach(function (item) {
//     item.addEventListener("click", function (val) {
//       let style = val.currentTarget.classList;
//       if (style.contains("increase")) {
//         count++;
//       } else if (style.contains("decrease")) {
//         count--;
//       } else if (style.contains("reset")) {
//         count = 0;
//       }
//       if (count > 0) {
//         value.style.color = "Blue";
//       } else {
//         value.style.color = "Red";
//       }
//       value.textContent = count;
//     });
//   });
  


// https://sebhastian.com/rock-paper-scissors-javascript/