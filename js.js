// <!--display-->
// <!-- 0-9 numbers-->
display = document.querySelector(".display")
tinyDisplay = document.querySelector(".tinyDisplay")
i = 0
storedValue = 0
storedArray = []
displayArray = []
storedSym = ''
value = ''

function press(arg){
    displayArray.push(arg)
    display.removeChild(display.firstChild);
    value = displayArray.join('');
    displayText = document.createTextNode(value);
    display.appendChild(displayText);
    return value;
}

function clear(){

}

function storedsym(val){
    storedSym = val
    return storedSym;
}

function storedarray(val){
    storedArray = val
    return storedArray;
}

function storedvalue(val){
    storedValue = val
    return storedValue;
}

function update(storedValue){
        displayText = document.createTextNode(storedValue)// display text is now added number
        displayArray = [] //clears displayArray
        display.removeChild(display.firstChild)//clear display
        tinyDisplay.removeChild(tinyDisplay.firstChild);//both clear visual
        display.textContent = 0;//sets visual to 0 to avoid null
        tinyDisplay.appendChild(displayText);//put stored data on the back screen for visual
        return;
}

function symbol(sym, storedArray, storedSym, storedValue){
    console.log(storedValue)
    console.log(sym)
    symValue = parseInt(displayArray.join(''))// turn value from press into an integar
    if (storedSym === '+'){
        storedValue += symValue// add
        update(storedValue)
        storedvalue(storedValue)
    }
    else if (storedSym === '-'){
        storedValue -= symValue // minus
        update(storedValue)
        storedvalue(storedValue)
    }
    else if (storedSym === '*'){
        storedValue *= symValue
        update(storedValue)
        storedvalue(storedValue)
    }
    else if (storedSym === '/'){
        storedValue /= symValue
        update(storedValue)
        storedvalue(storedValue)
    }
    else if (sym === '='){
        tinyDisplay.removeChild(tinyDisplay.firstChild);
        displayText = document.createTextNode(storedValue);
        tinyDisplay.appendChild(displayText);
        storedValue = 0
        storedSym = '';
        sym = ''
        storedvalue(storedValue)
        return storedSym;
    }
    else{
    storedSym = sym
    storedArray = []//clear stored array
    storedArray = displayArray //stores data off of display
    displayArray = [] //clears displayArray
    display.removeChild(display.firstChild)//clear display
    tinyDisplay.removeChild(tinyDisplay.firstChild);//both clear visual
    display.textContent = 0;//sets visual to 0 to avoid null
    tinyDisplay.appendChild(displayText);//put stored data on the back screen for visual
    storedValue = parseInt(storedArray.join(''))//get stored value from array
    storedarray(storedArray)
    storedsym(storedSym)
    storedvalue(storedValue)
    console.log(storedValue)
    return storedSym;
    }
};


// <!-- . --> make so only one is used
// <!-- ce --> clear everything and display array
// <!-- + - * / --> pre calculation variable
// <!-- = --> calculates cleers display and outputs new value
// <!-- of/on--> clears everything and stops function