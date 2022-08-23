// getting the buttons and labels to show result
const plListBody = document.getElementById('ol-body');
const plCostBtnEle = document.getElementById('plCostCalc');

const TotalCostBtnEle = document.getElementById('totalCost');
const plCostTotalEle = document.getElementById('plExp');
const FinalTotalCostEle = document.getElementById('CostTotal');
const noplayerlabel = document.getElementById('noplayer')



// utility function to acces the input values

function getInputs(eleId) {
    const ele = document.getElementById(eleId);
    const eleValue = parseFloat(ele.value);
    return eleValue;
}

const players = [];
// function to select players
function addPlayers(button) {
    //    disabling btn
    button.setAttribute("disabled", "");
    button.style.backgroundColor = 'rgba(180, 176, 176, 0.2)';
    // accessing trhe elements
    const plName = (button.parentNode.children[0].innerText);
    noplayerlabel.style.display = "none";
    // pushing players to array
    players.push(plName);

    // condition for maximum 5 players
    if (players.length <= 5) {
        const pltotal = document.getElementById('total-players');
        pltotal.innerText = `Selected  ->  ${players.length} ✅`;
        // upading list dynamically
        plListBody.innerHTML = ""
        for (let i = 0; i < players.length; i++) {
            const playerNamee = players[i];
            const plList = document.createElement('h4')
            plList.innerHTML = ` <h4>${i + 1} - &nbsp; ${playerNamee}</h4>
            `
            plListBody.appendChild(plList);
        }

    }

    else {
        alert("    Sorry 😢\n You can select only 5 players");
        players.length--;
        return;
    }
}


// function to calculate expense of players
function calculatePlayerExpense() {
    // using the utility function 
    const perCost = getInputs("plPcost");
    const playerCostTotal = perCost * players.length;
    console.log(playerCostTotal);
    plCostTotalEle.innerText = `Total Players Expense: $ ${playerCostTotal}`;
    return playerCostTotal;

}
// calculate players cost through button
plCostBtnEle.addEventListener("click", function () {
    const perCost = getInputs("plPcost");
    // with validation
    if (!(isNaN(perCost))) {
        return calculatePlayerExpense();
    }

    else {
        alert("         !!!!!Opsss!!! \n you have missed to input per player cost amount👇🙏")
    }
});

// calculate other cost within players
TotalCostBtnEle.addEventListener("click", function TotalCostBtnEle() {

    // using callculatePlayerexpense function as common function in this function
    const previousTotal = calculatePlayerExpense();
    // using the utility function 
    const managerCost = getInputs("managCost");
    const coachCost = getInputs("coachCost");
    // validation
    if (!(isNaN(managerCost)) && !(isNaN(coachCost))) {
        const finalTotal = previousTotal + coachCost + managerCost;
        FinalTotalCostEle.innerText = `Total Expense: $ ${finalTotal}`;
    }

    else {
        alert("Please enter the cost amount of below inputs👇🙏")
    }
})


