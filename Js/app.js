const players = [];

function addPlayers(button) {
    //    disabling btn
    button.setAttribute("disabled", "");
    button.style.backgroundColor = 'rgba(180, 176, 176, 0.2)';
    // accessing trhe elements
    const plName = (button.parentNode.children[0].innerText);
    const plListBody = document.getElementById('ol-body');
    // pushing players to array
    players.push(plName);


    if (players.length <= 5) {
        const pltotal = document.getElementById('total-players');
        pltotal.innerText = `Selected Five ->  ${players.length} ✅`;
        // upading list dynamically
        plListBody.innerHTML = ""
        for (let i = 0; i < players.length; i++) {
            // players.push(plName);
            const playerNamee = players[i];
            // console.log('pl name', playerNamee);


            const plList = document.createElement('h4')
            plList.innerHTML = ` <h4>${i + 1}- ${playerNamee}</h4>
            `
            plListBody.appendChild(plList);


        }

    }

    else {
        alert("You can slect only 5 players");
        players.length--;
        return;
    }
    // updsating count


}


const plCostBtnEle = document.getElementById('plCostCalc');
const TotalCostBtnEle = document.getElementById('totalCost');



const plCostEle = document.getElementById('plPcost');
const plCostTotalEle = document.getElementById('plExp');
const managCostEle = document.getElementById('managCost');
const coachCostEle = document.getElementById('coachCost');
const FinalTotalCostEle = document.getElementById('CostTotal');
function calculatePlayerExpense() {
    const perCost = parseFloat(plCostEle.value);
    const playerCostTotal = perCost * players.length;
    console.log(playerCostTotal);
    plCostTotalEle.innerText = `Total Players Expense: ${playerCostTotal}`;
    return playerCostTotal;
}
plCostBtnEle.addEventListener("click", calculatePlayerExpense)

TotalCostBtnEle.addEventListener("click", function TotalCostBtnEle() {
    const previousTotal = calculatePlayerExpense();
    console.log(previousTotal);
    const finalTotal = previousTotal + parseFloat((managCostEle.value)) + parseFloat((coachCostEle.value))
    console.log(finalTotal);
    FinalTotalCostEle.innerText = `Total Expense: ${finalTotal}`;
})