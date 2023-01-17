let rulesPage = document.querySelector("#rulesBTN");
let startPage = document.querySelector("#startBTN");
let regularPage = document.querySelector("#regularBTN");

let rules = document.querySelector("#rulesPage");
let setUp = document.querySelector("#container");
let timed = document.querySelector("#length");

function gameSelect(event) {
    let btn = event.target;
    if(!btn.classList.contains("gameSelected")){
        rulesPage.classList.remove("gameSelected");
        startPage.classList.remove("gameSelected");
        regularPage.classList.remove("gameSelected");
        btn.classList.add("gameSelected");
        btn.classList.remove("gameDeselected");
        
    } else {
        btn.classList.add("gameDeselected");
        btn.classList.remove("gameSelected");
    }
}


rulesPage.addEventListener('click', function(event){
    gameSelect(event);
    rules.classList.remove("Hide");
    setUp.classList.add("Hide");
})

startPage.addEventListener('click', function(event){
    gameSelect(event);
    timed.classList.remove("Hide");
    rules.classList.add("Hide");
    setUp.classList.remove("Hide");
})

regularPage.addEventListener('click', function(event){
    gameSelect(event);
    timed.classList.add("Hide");
    rules.classList.add("Hide");
    setUp.classList.remove("Hide");

})

let shortBtn = document.querySelector("#short");
let mediumBtn = document.querySelector("#medium");
let longBtn = document.querySelector("#long");

shortBtn.addEventListener('click', function(event){
    console.log("short selected");
    lengthSelection();
    playerSelect(event);
})
mediumBtn.addEventListener('click', function(event){
    console.log("medium selected");
    lengthSelection();
    playerSelect(event);
})
longBtn.addEventListener('click', function(event){
    console.log("long selected");
    lengthSelection();
    playerSelect(event);
})

let players3 = document.querySelector("#players3");
let players4 = document.querySelector("#players4");
let players5 = document.querySelector("#players5");
let players6 = document.querySelector("#players6");
let name1 = document.querySelector("#name1");
let name2 = document.querySelector("#name2");
let name3 = document.querySelector("#name3");
let name4 = document.querySelector("#name4");
let name5 = document.querySelector("#name5");
let name6 = document.querySelector("#name6");
let names = document.querySelector("#names");
let numPlayers = 0;

players3.addEventListener('click', function(event){
    console.log("3players");
    removeSelection();
    playerSelect(event);
    numPlayers = 3;
    showNames(numPlayers);
})

players4.addEventListener('click', function(event){
    console.log("4players");
    removeSelection();
    playerSelect(event);
    numPlayers = 4;
    showNames(numPlayers);
})

players5.addEventListener('click', function(event){
    console.log("5players");
    removeSelection();
    playerSelect(event);
    numPlayers = 5;
    showNames(numPlayers);
})

players6.addEventListener('click', function(event){
    console.log("6players");
    removeSelection();
    playerSelect(event);
    numPlayers = 6;
    showNames(numPlayers);
})

function removeSelection(){
    players3.classList.remove("selected");
    players4.classList.remove("selected");
    players5.classList.remove("selected");
    players6.classList.remove("selected");
}

function lengthSelection(){
    shortBtn.classList.remove("selected");
    mediumBtn.classList.remove("selected");
    longBtn.classList.remove("selected");
}

function playerSelect(event) {
    let btn = event.target;
    if(!btn.classList.contains("selected")){
        btn.classList.add("selected");
        btn.classList.remove("deselected");
        
    } else {
        btn.classList.add("deselected");
        btn.classList.remove("selected");
    }
}

function showNames(numPlayers) {
    names.classList.remove("Hide");
    if(numPlayers === 3) {
        name1.classList.remove("Hide");
        name2.classList.remove("Hide");
        name3.classList.remove("Hide");
        name4.classList.add("Hide");
        name5.classList.add("Hide");
        name6.classList.add("Hide");
    } else if (numPlayers === 4) {
        name1.classList.remove("Hide");
        name2.classList.remove("Hide");
        name3.classList.remove("Hide");
        name4.classList.remove("Hide");
        name5.classList.add("Hide");
        name6.classList.add("Hide");
    } else if (numPlayers === 5) {
        name1.classList.remove("Hide");
        name2.classList.remove("Hide");
        name3.classList.remove("Hide");
        name4.classList.remove("Hide");
        name5.classList.remove("Hide");
        name6.classList.add("Hide");
    } else if (numPlayers === 6) {
        name1.classList.remove("Hide");
        name2.classList.remove("Hide");
        name3.classList.remove("Hide");
        name4.classList.remove("Hide");
        name5.classList.remove("Hide");
        name6.classList.remove("Hide");
    }
}

/*

*/

let timerBTN = document.querySelector("#startTimer");
let counters = document.querySelector("#counters");

timerBTN.addEventListener('click', function(){
    console.log('clicked');
    counters.classList.remove("Hide");
    setUp.classList.add("Hide");

    let shortTime = (getRandomInt(25,40));
    let mediumTime = (getRandomInt(40,70));
    let longTime = (getRandomInt(70,90));

    console.log(shortTime);
    console.log(mediumTime);
    console.log(longTime);

})

function test(){
    console.log('in test');
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}