const rolls = {
    "Original": {
        "basePrice": 2.49,
        "imageFile": "original-cinnamon-roll.jpeg"
    },
    "Apple": {
        "basePrice": 3.49,
        "imageFile": "apple-cinnamon-roll.jpeg"
    },
    "Raisin": {
        "basePrice": 2.99,
        "imageFile": "raisin-cinnamon-roll.jpeg"
    },
    "Walnut": {
        "basePrice": 3.49,
        "imageFile": "walnut-cinnamon-roll.jpeg"
    },
    "Double-Chocolate": {
        "basePrice": 3.99,
        "imageFile": "double-chocolate-cinnamon-roll.jpeg"
    },
    "Strawberry": {
        "basePrice": 3.99,
        "imageFile": "strawberry-cinnamon-roll.jpeg"
    }    
};


const queryString = window.location.search;
// console.log(queryString);

const params = new URLSearchParams(queryString);
// console.log(params);

const chosenRoll = params.get('roll');
// console.log(chosenRoll);

const headerElement = document.querySelector('#roll-header-text');
headerElement.innerText = chosenRoll + ' Cinnamon Roll';

const rollPrice = document.querySelector('#output');
rollPrice.innerText = rolls[chosenRoll]["basePrice"];

const rollImage = document.querySelector('#roll-img');
rollImage.src = './assets/' + rolls[chosenRoll]["imageFile"];

let roll = {
    basePrice: 2.49,

    glazingOption:"keep_original",
    glazingOptions: ["keep_original", "suger_milk", "vanilla_milk","double-chocolate"],
    glazingAdaption: 0,
    glazingAdaptions: [0,0,0.5,1.5],

    packSize:"1",
    packSizes:["1","3","6","12"],
    sizeAdaption: 1,
    sizeAdaptions:[1,3,5,10],
}

roll.basePrice = rolls[chosenRoll]["basePrice"];

function glazingChange(){
    let rollGlazingElement = document.querySelector('#glazingNames');
    roll.glazingOption = rollGlazingElement.value;

    for(let i=0; i<roll.glazingOptions.length; i++){
        if (roll.glazingOptions[i] === roll.glazingOption){
            roll.glazingAdaption = roll.glazingAdaptions[i];
            // console.log('roll galizing Options:', roll.glazingOptions[i]);
            // console.log('glazing apdations:', roll.glazingAdaptions[i]);
            break;
        }
    }

    let output = (roll.basePrice + roll.glazingAdaption) * roll.sizeAdaption;
    console.log(output);
    document.querySelector('#output').textContent = output.toFixed(2);
    
}

function sizeChange(){
    let rollSizeElement = document.querySelector('#sizeNames');
    roll.packSize = rollSizeElement.value;

    for(let j=0; j<roll.packSizes.length; j++){
        if (roll.packSizes[j] === roll.packSize){
            roll.sizeAdaption = roll.sizeAdaptions[j];
            // console.log('roll size Options:', roll.sizeAdaptions[j]);
            // console.log('size apdations:', roll.sizeAdaption);
        }
    }

    let output = (roll.basePrice + roll.glazingAdaption) * roll.sizeAdaption;
    console.log(output);
    document.querySelector('#output').textContent = output.toFixed(2);
}

let cart=[];

class Roll {

    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.rollType = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}


function updateCart(){

    let rollOne = new Roll();

    rollOne.rollType = chosenRoll;
    // console.log(rollOne.rollType);

    rollOne.glazing = roll.glazingOption;
    // console.log(rollOne.glazing);

    rollOne.size = roll.packSize;
    // console.log(rollOne.size);

    rollOne.basePrice = rolls[chosenRoll]["basePrice"];
    // console.log(rollOne.basePrice);

    // console.log(rollOne);
    cart.push(rollOne);
    console.log(cart);
};

document.querySelector("#cartButton").onclick = function(){
    updateCart();
};








