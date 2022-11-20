let state = {
    page: 'welcome',
    players: [,],
    rounds: 3,
    currentPlayer: 0
};
const qas = document.querySelectorAll.bind(document);
const byId = document.getElementById.bind(document);
const mains = ['welcome','game','players','scores'];
const hideMains = () => qas('main').forEach(e => e.style.display = 'none');
const showCurrentPage = (s) => byId(s.page).style.display = 'block';


function render(s){
    hideMains();
    showCurrentPage(s);
    switch (s.page){
        case 'players':
            playersDisplay();
        // case 'game':
        //     gameDisplay();
    }
}

function startNewGame(s){
    return {...s, page: 'players'};
}


const start = document.getElementById("start");
start.addEventListener("click", ()=> {
    state = startNewGame(state)
    render(state)
});
// const game = document.getElementById("game");
// start.addEventListener("click", ()=> {
    
//     render(state)
// });


document.addEventListener("DOMContentLoaded", ()=> render(state));

function playersDisplay(){
    if (state.players.length>2){
        for(i=0;i<state.players.length; i++){
            document.querySelector("#playersNames").innerHTML += `Player\'s ${i+1} Name: <input type="text"><br>`;
        }
    }else{
        for(i=0; i<2; i++){document.querySelector("#playersNames").innerHTML += `Player\'s ${i+1} Name: <input type="text"><br>`};
    }
    let inp = document.querySelector("input").firstChild.value
    inp.addEventListener("keyup",addPlayerName(inp, i));
}

function addPlayerName(_name, _index){
    state.players[_index].name = _name;
    console.log(state)
}