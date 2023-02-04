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
let gameLength;

shortBtn.addEventListener('click', function(event){
    console.log("short selected");
    lengthSelection();
    btnSelect(event);
    gameLength = "short";
})
mediumBtn.addEventListener('click', function(event){
    console.log("medium selected");
    lengthSelection();
    btnSelect(event);
    gameLength = "medium";
})
longBtn.addEventListener('click', function(event){
    console.log("long selected");
    lengthSelection();
    btnSelect(event);
    gameLength = "long";
})

let yesBTN = document.querySelector("#yes");
let noBTN = document.querySelector("#no");

let notify = "no";

yesBTN.addEventListener('click', function(event){
    removeTime();
    notifyBTNSelect(event);
    notify = "yes";
})

noBTN.addEventListener('click', function(event){
    removeTime();
    notifyBTNSelect(event);
    notify = "no";
})

function notifyBTNSelect(event) {
    let btn = event.target;
    if(!btn.classList.contains("timeSelected")){
        btn.classList.add("timeSelected");
        btn.classList.remove("timeDeselected");
    } else {
        btn.classList.add("timeDeselected");
        btn.classList.remove("timeSelected");
    }
}

function removeTime(){
    yesBTN.classList.remove("timeSelected");
    noBTN.classList.remove("timeSelected");
}

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
let playerOne = document.querySelector("#playerOne");
let playerTwo = document.querySelector("#playerTwo");
let playerThree = document.querySelector("#playerThree");
let playerFour = document.querySelector("#playerFour");
let playerFive = document.querySelector("#playerFive");
let playerSix = document.querySelector("#playerSix");
let p1name = document.querySelector("#p1name");
let p2name = document.querySelector("#p2name");
let p3name = document.querySelector("#p3name");
let p4name = document.querySelector("#p4name");
let p5name = document.querySelector("#p5name");
let p6name = document.querySelector("#p6name");




players3.addEventListener('click', function(event){
    console.log("3players");
    removeSelection();
    btnSelect(event);
    numPlayers = 3;
    showNames(numPlayers);
})

players4.addEventListener('click', function(event){
    console.log("4players");
    removeSelection();
    btnSelect(event);
    numPlayers = 4;
    showNames(numPlayers);
})

players5.addEventListener('click', function(event){
    console.log("5players");
    removeSelection();
    btnSelect(event);
    numPlayers = 5;
    showNames(numPlayers);
})

players6.addEventListener('click', function(event){
    console.log("6players");
    removeSelection();
    btnSelect(event);
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

function btnSelect(event) {
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
    name3.classList.remove("lastName");
    name5.classList.remove("lastName");
    if(numPlayers === 3) {
        name3.classList.add("lastName");
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
        name5.classList.add("lastName");
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

let timerBTN = document.querySelector("#startTimer");
let counters = document.querySelector("#counters");
let time = 0, minTime = 0;
let mode = document.querySelector("#mode");

timerBTN.addEventListener('click', function(){
    if(gameLength === "short"){
        time = (getRandomInt(25,40));
        minTime = 25;
        mode.textContent = "short";
        console.log(time); 
    } else if(gameLength === "medium"){
        time = (getRandomInt(40,70));
        minTime = 40;
        mode.textContent = "medium";
        console.log(time);
    } else if(gameLength === "long"){
        time = (getRandomInt(70,90));
        minTime = 70;
        mode.textContent = "long";
        console.log(time);
    }

    console.log('clicked');
    counters.classList.remove("Hide");
    setUp.classList.add("Hide");
    document.querySelector("#Header").classList.add("Hide");
    showCounters();

    if(notify === "yes"){
        changeTimer(minTime);
    } else{
        document.querySelector("#info").classList.add("Hide");
    }



    realTimer(time);


    console.log("https://www.youtube.com/watch?v=W2Z7fbCLSTw");
    console.log("https://www.youtube.com/watch?v=-bt_y4Loofg");
})

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.trunc(Math.random() * (max - min) + min);
}

async function changeTimer(time) {
    console.log("minium time:");
    console.log(time);
    for(let dec = time; dec > 0; dec--) {
        document.querySelector("#TIMER").textContent = dec;
        await sleep(60000);
        // await sleep(1000);
        console.log("timeout");
        if(dec === 1){
            document.querySelector("#timeDone").classList.remove("Hide");
            document.querySelector("#info").classList.add("Hide");
        }
    }    
}

async function realTimer(time) {
    console.log("final time:");
    console.log(time);
    for(let dec = time; dec > 0; dec--) {
        await sleep(1000);
        // await sleep(60000);
        console.log("timeout");
        if(dec === 1){
            document.querySelector("#timeDone").classList.add("Hide");
            document.querySelector("#info").classList.add("Hide");
            document.querySelector("#finishedTimer").classList.remove("Hide");
        }
    }    
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function showCounters() {
    p1name.textContent = name1.value;
    p2name.textContent = name2.value;
    p3name.textContent = name3.value;
    p4name.textContent = name4.value;
    p5name.textContent = name5.value;
    p6name.textContent = name6.value;
    console.log(numPlayers);
    if (numPlayers === 3){
        playerOne.classList.remove("Hide");
        playerTwo.classList.remove("Hide");
        playerThree.classList.remove("Hide");
        playerFour.classList.add("Hide");
        playerFive.classList.add("Hide");
        playerSix.classList.add("Hide");
    } else if (numPlayers === 4) {
        playerOne.classList.remove("Hide");
        playerTwo.classList.remove("Hide");
        playerThree.classList.remove("Hide");
        playerFour.classList.remove("Hide");
        playerFive.classList.add("Hide");
        playerSix.classList.add("Hide");
    } else if (numPlayers === 5) {
        playerOne.classList.remove("Hide");
        playerTwo.classList.remove("Hide");
        playerThree.classList.remove("Hide");
        playerFour.classList.remove("Hide");
        playerFive.classList.remove("Hide");
        playerSix.classList.add("Hide");
    } else {
        playerOne.classList.remove("Hide");
        playerTwo.classList.remove("Hide");
        playerThree.classList.remove("Hide");
        playerFour.classList.remove("Hide");
        playerFive.classList.remove("Hide");
        playerSix.classList.remove("Hide");
    }
}

// change to counters functionality
function minusNum(vari, changing) {
    vari = vari - 1;
    changing.textContent = vari;
    return vari;
}

function plusNum(vari, changing) {
    vari = vari + 1
    changing.textContent = vari;
    return vari;
}
let p1lvl = document.querySelector("#p1lvl");
let p1lvlValue = 3;
let p1cp = document.querySelector("#p1cp");
let p1cpValue = 3;

document.querySelector("#p1LMinus").addEventListener('click', function(){
    p1lvlValue = minusNum(p1lvlValue, p1lvl);
})

document.querySelector("#p1LPlus").addEventListener('click', function(){
    p1lvlValue = plusNum(p1lvlValue, p1lvl);
})

document.querySelector("#p1CMinus").addEventListener('click', function(){
    p1cpValue = minusNum(p1cpValue, p1cp);
})

document.querySelector("#p1CPlus").addEventListener('click', function(){
    p1cpValue = plusNum(p1cpValue, p1cp);
})

let p2lvl = document.querySelector("#p2lvl");
let p2lvlValue = 3;
let p2cp = document.querySelector("#p2cp");
let p2cpValue = 3;

document.querySelector("#p2LMinus").addEventListener('click', function(){
    p2lvlValue = minusNum(p2lvlValue, p2lvl);
})

document.querySelector("#p2LPlus").addEventListener('click', function(){
    p2lvlValue = plusNum(p2lvlValue, p2lvl);
})

document.querySelector("#p2CMinus").addEventListener('click', function(){
    p2cpValue = minusNum(p2cpValue, p2cp);
})

document.querySelector("#p2CPlus").addEventListener('click', function(){
    p2cpValue = plusNum(p2cpValue, p2cp);
})

let p3lvl = document.querySelector("#p3lvl");
let p3lvlValue = 3;
let p3cp = document.querySelector("#p3cp");
let p3cpValue = 3;

document.querySelector("#p3LMinus").addEventListener('click', function(){
    p3lvlValue = minusNum(p3lvlValue, p3lvl);
})

document.querySelector("#p3LPlus").addEventListener('click', function(){
    p3lvlValue = plusNum(p3lvlValue, p3lvl);
})

document.querySelector("#p3CMinus").addEventListener('click', function(){
    p3cpValue = minusNum(p3cpValue, p3cp);
})

document.querySelector("#p3CPlus").addEventListener('click', function(){
    p3cpValue = plusNum(p3cpValue, p3cp);
})

let p4lvl = document.querySelector("#p4lvl");
let p4lvlValue = 3;
let p4cp = document.querySelector("#p4cp");
let p4cpValue = 3;

document.querySelector("#p4LMinus").addEventListener('click', function(){
    p4lvlValue = minusNum(p4lvlValue, p4lvl);
})

document.querySelector("#p4LPlus").addEventListener('click', function(){
    p4lvlValue = plusNum(p4lvlValue, p4lvl);
})

document.querySelector("#p4CMinus").addEventListener('click', function(){
    p4cpValue = minusNum(p4cpValue, p4cp);
})

document.querySelector("#p4CPlus").addEventListener('click', function(){
    p4cpValue = plusNum(p4cpValue, p4cp);
})

let p5lvl = document.querySelector("#p5lvl");
let p5lvlValue = 3;
let p5cp = document.querySelector("#p5cp");
let p5cpValue = 3;

document.querySelector("#p5LMinus").addEventListener('click', function(){
    p5lvlValue = minusNum(p5lvlValue, p5lvl);
})

document.querySelector("#p5LPlus").addEventListener('click', function(){
    p5lvlValue = plusNum(p5lvlValue, p5lvl);
})

document.querySelector("#p5CMinus").addEventListener('click', function(){
    p5cpValue = minusNum(p5cpValue, p5cp);
})

document.querySelector("#p5CPlus").addEventListener('click', function(){
    p5cpValue = plusNum(p5cpValue, p5cp);
})

let p6lvl = document.querySelector("#p6lvl");
let p6lvlValue = 3;
let p6cp = document.querySelector("#p6cp");
let p6cpValue = 3;

document.querySelector("#p6LMinus").addEventListener('click', function(){
    p6lvlValue = minusNum(p6lvlValue, p6lvl);
})

document.querySelector("#p6LPlus").addEventListener('click', function(){
    p6lvlValue = plusNum(p6lvlValue, p6lvl);
})

document.querySelector("#p6CMinus").addEventListener('click', function(){
    p6cpValue = minusNum(p6cpValue, p6cp);
})

document.querySelector("#p6CPlus").addEventListener('click', function(){
    p6cpValue = plusNum(p6cpValue, p6cp);
})