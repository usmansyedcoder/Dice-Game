let total = 0;
let x = 0;

function rollDice()
{
    x = Math.random() * 6 + 1;
    document.querySelector(".digit").textContent = Math.trunc(x);
    x = Math.trunc(x);

    total+=x;

    document.querySelector(".total").textContent = total;

    let discImg = document.querySelector(".image");
    discImg.src = `images/dice-${x}.png`;
    if(x==6)
    {
        alert("congratulations! for 6");
    }

    if(total >=100)
    {
        document.querySelector(".win").innerHTML = "You win! Congratulations."
    }

}