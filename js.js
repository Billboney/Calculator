// <!--display-->
// <!-- 0-9 numbers-->
display = document.querySelector(".display")
tinyDisplay = document.querySelector(".tinyDisplay")
i = 0
storedArray = []
displayArray = []
storedSym = ''

function press(arg){
    displayArray.push(arg)
    display.removeChild(display.firstChild);
    Value = displayArray.join('');
    displayText = document.createTextNode(Value);
    display.appendChild(displayText);
    return displayText, Value;
}

function calculate(displayText){
    storedArray = []
    storedArray = displayArray //stores data off of display
    displayArray = [] //clears displayArray
    display.removeChild(display.firstChild);
    tinyDisplay.removeChild(tinyDisplay.firstChild);//both clear visual
    display.textContent = 0;
    tinyDisplay.appendChild(displayText);//put stored data on the back screen for visual
    return storedArray
}

function symbol(sym, Value, storedArray, storedSym){
    storedValue = parseInt(storedArray.join(''))
    symValue = parseInt(Value)
   
    if (storedSym = '+'){
        symValue += storedValue
        displayText = document.createTextNode(symValue)
        console.log(symValue)
        return displayText = document.createTextNode(symValue);
    }
    else if (sym = '-'){

    }
    else if (sym = '*'){

    }
    else if (sym = ''){

    }
    storedSym = sym

    return storedSym;
};


// <!-- . --> make so only one is used
// <!-- ce --> clear everything and display array
// <!-- + - * / --> pre calculation variable
// <!-- = --> calculates cleers display and outputs new value
// <!-- of/on--> clears everything and stops function