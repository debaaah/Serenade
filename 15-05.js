
document.getElementsById("sin").style.display = "none";


function afunc() {
alert("INSTRUCTION: Choose a letter to indicate your relationship status") 
let A = prompt("S for Single, D for Dating, M for Married, T for Turning(or complicated");
    if (A == "S"){
        let single = document.getElementById("sin");
        single.play();
    }
        else if (A == "D"){
            let dating = document.getElementById("dat");
            dating.play();
        } else if (A === "M"){
            let married = document.getElementById("mar");
            married.play();
        } else if (A === "T"){
            let turning = document.getElementById("tur");
            turning.play();
        } else {
            alert("Choose a valid status;)");
            afunc();
        }

    }