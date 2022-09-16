console.log('The website is working!');

let roll = {
    bestPrice: 2.49,

    glazingOption:"keep_original",
    glazingOptions: ["keep_original", "suger_milk", "vanilla_milk","double-chocolate"],
    glazingAdaption: 0,
    glazingAdaptions: [0,0,0.5,1.5],

    packSize:"1",
    packSizes:["number1","number3","number6","number12"],
    sizeAdaption: 1,
    sizeAdaptions:[1,3,5,10],
}

function glazingChange(){
    let rollGlazingElement = document.querySelector('#glazingNames');
    roll.glazingOption = rollGlazingElement.value;

    for(let i=0; i<roll.glazingOptions.length; i++){
        if (roll.glazingOptions[i] === roll.glazingOption){
            roll.glazingAdaption = roll.glazingAdaptions[i];
            console.log('roll galizing Options:', roll.glazingOptions[i]);
            console.log('glazing apdations:', roll.glazingAdaptions[i]);
            break;
        }
    }

    let output = (roll.bestPrice + roll.glazingAdaption) * roll.sizeAdaption;
    console.log(output);
    document.querySelector('#output').textContent = output.toFixed(2);
    
}

function sizeChange(){
    let rollSizeElement = document.querySelector('#sizeNames');
    roll.packSize = rollSizeElement.value;

    for(let j=0; j<roll.packSizes.length; j++){
        if (roll.packSizes[j] === roll.packSize){
            roll.sizeAdaption = roll.sizeAdaptions[j];
            console.log('roll size Options:', roll.sizeAdaptions[j]);
            console.log('size apdations:', roll.sizeAdaption);
        }
    }

    let output = (roll.bestPrice + roll.glazingAdaption) * roll.sizeAdaption;
    console.log(output);
    document.querySelector('#output').textContent = output.toFixed(2);

}