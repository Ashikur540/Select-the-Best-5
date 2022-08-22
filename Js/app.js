const players = [];

function addPlayers(button) {
    //    disabling btn
    button.setAttribute("disabled", "");
    button.style.backgroundColor = 'rgba(180, 176, 176, 0.2)';
    // accessing trhe elements
    const plName = (button.parentNode.children[0].innerText);

    // pushing players to array
    players.push(plName);
    console.log(players);
    // updsating count
    const pltotal = document.getElementById('total-players');
    pltotal.innerText = `Selected Five ->  ${players.length} ✅`;
    // upading list dynamically
    for (let i = 0; i < players.length; i++) {
        console.log(players[i]);

    }
    const plList = document.getElementById('ol-body');
    plList.innerHTML = ` <li>players[i]</li>
    <li>players[i]</li>
    <li>players[i]</li>
    <li>players[i]</li>`
}