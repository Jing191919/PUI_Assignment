class Roll {

    constructor(rollType, rollGlazing, packSize, rollPrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = rollPrice;

        this.element = null;
        this.element2 = null;
    }
}

let addRoll = true;

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

let roll = {
    basePrice: 2.49,

    glazingOption:"Original",
    glazingOptions: ["Original", "Sugar Milk", "Vanilla Milk","Double Chocolate"],
    glazingAdaption: 0,
    glazingAdaptions: [0,0,0.5,1.5],

    packSize:"1",
    packSizes:["1","3","6","12"],
    sizeAdaption: 1,
    sizeAdaptions:[1,3,5,10],

    totalPrice: 0,
}

let rollSet = new Set();

function addNewRoll(rollType, rollGlazing, packSize, rollPrice){
    let rollCart = new Roll(rollType, rollGlazing, packSize, rollPrice);
    rollSet.add(rollCart);

    return rollCart;
}

function createElement(rollCart){
    // console.log("making rolls");

    let temp1 = document.querySelector("#roll-template").content;
    let clone = document.importNode(temp1,true);
    // console.log("clone:");
    // console.log(clone);

    let container = document.querySelector(".Cart_InformationWithLine");
    // console.log("container:");
    // console.log(container);

    container.prepend(clone);

    rollCart.element2 = container.querySelector(".Cart_ProductInformation");
    rollCart.element = container.querySelector(".Cart_ProductInformation").querySelector(".Cart_ProductName");

    let btnDelete = rollCart.element2.querySelector("#icon-delete");
    // console.log("btnDelete:");
    // console.log(btnDelete);
    btnDelete.addEventListener('click', () => {
        deleteRoll(rollCart);
      });

    updateElement(rollCart);
}

function updateElement(rollCart){
    let rollTypeElement = rollCart.element.querySelector("#roll-type");
    rollTypeElement.innerText = rollCart.type;
    // console.log("rollTypeElement:"+rollTypeElement);

    let rollGlazingElement = rollCart.element.querySelector("#roll-glazing");
    rollGlazingElement.innerText = "Glazing:"+rollCart.glazing;

    let packSizeElement = rollCart.element.querySelector("#roll-size");
    packSizeElement.innerText = "Pack Size:"+rollCart.size;

    let chosenRoll = rollCart.type;

    let rollImage = rollCart.element2.querySelector('#roll-cart-image');
    rollImage.src = './assets/' + rolls[chosenRoll]["imageFile"];

    // calSinglePrice(rollCart);

    let calculatePrice = calSinglePrice(rollCart,true);

    let singlePrice = calculatePrice.output;
        totalPrice = calculatePrice.totalPrice;

    let singlePriceElement = rollCart.element2.querySelector("#roll-price");
    singlePriceElement.innerText = "$ "+ singlePrice.toFixed(2);

    let totalPriceElement = document.querySelector("#total-price");
    totalPriceElement.innerText = "$ "+ totalPrice.toFixed(2);
}

function deleteRoll(rollCart){
    let deletePrice = calSinglePrice(rollCart,false);

    let deleteTotalPrice = deletePrice.totalPrice;
    // console.log("deleteTotalPrice:"+deleteTotalPrice);

    let deleteTotalPriceElement = document.querySelector("#total-price");
    deleteTotalPriceElement.innerText = "$ "+ deleteTotalPrice.toFixed(2);

    rollCart.element.remove();
    rollCart.element2.remove();
    rollSet.delete(rollCart);
    console.log(rollSet);
}

function calSinglePrice(rollCart,addRoll){
    
    roll.glazingOption = rollCart.glazing;
    roll.packSize = rollCart.size;
    roll.basePrice = rolls[rollCart.type]["basePrice"]
    // console.log(rollCart.glazing);

    for(let i=0; i<roll.glazingOptions.length; i++){
        if (roll.glazingOptions[i] === roll.glazingOption){
            roll.glazingAdaption = roll.glazingAdaptions[i];
            // console.log('roll galizing Options:', roll.glazingOptions[i]);
            // console.log('glazing apdations:', roll.glazingAdaptions[i]);
            break;
        }
    }

    for(let j=0; j<roll.packSizes.length; j++){
        if (roll.packSizes[j] === roll.packSize){
            roll.sizeAdaption = roll.sizeAdaptions[j];
            // console.log('roll size Options:', roll.sizeAdaptions[j]);
            // console.log('size apdations:', roll.sizeAdaption);
        }
    }
    
    // console.log("roll.basePrice:"+roll.basePrice);
    // console.log("roll.glazingAdaption:"+roll.glazingAdaption);
    // console.log("roll.sizeAdaption:"+roll.sizeAdaption);

    let output = (roll.basePrice + roll.glazingAdaption) * roll.sizeAdaption;
    // console.log("output:"+output);

    if(addRoll === true){
        let totalPrice = roll.totalPrice += output;
        return {output,totalPrice};
    } else {
        let totalPrice = roll.totalPrice -= output;
        return {output,totalPrice};
    }

    
}


let rollCartOne = addNewRoll(
    "Original",
    "Sugar Milk",
    "1",
    2.49,
)

let rollCartTwo = addNewRoll(
    "Walnut",
    "Vanilla Milk",
    "12",
    3.49,
)

let rollCartThree = addNewRoll(
    "Raisin",
    "Sugar Milk",
    "3",
    2.99,
)

let rollCartFour = addNewRoll(
    "Apple",
    "Original",
    "3",
    3.49,
)

console.log(rollSet);

for(let item of rollSet){
    createElement(item);
    console.log("making rolls///");
}



