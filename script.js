var addVal = false,
subVal = false,
multVal = false,
divVal = false,
clearBtn = $('#clear'),
addBtn = $('#add'),
subBtn = $('#subtract'),
multBtn = $('#multiply'),
divBtn = $('#divide'),
result = $('#result'),
num = $('.num'),
readout = $('#readout'),
numArray = [],
addText = $(addBtn).text(),
newNum = false;


$(document).ready(function(){
    handleSpan();
    handleNum();
    handleAdd();
    handleSub();
    handleDiv();
    handleMult();
    handleEquals();
    handleClear();

});
//Appends any numBtn to the readout
function handleNum(){
    $('.num').on('mousedown', function() {
        var numText = $(this).text();
        $(readout).append(numText);
        if(newNum === true){
            $(readout).empty();
            newNum = false;       
            $(readout).append(numText);
        }
    });   
}
//Toggles my highlights
function handleSpan(){
    $('span').on('mousedown', function() {
        $(this).addClass("highlight");
    });        
    $('span').on('mouseup', function(){
        $(this).removeClass("highlight");
    });
}
//handles my clear button
function handleClear(){
    $(clearBtn).on('click', function(){
        $('#readout').empty();
        numArray.length = 0;
        console.log(numArray);
        if(addVal === true){
            addVal = false;
        } else if (subVal === true){
            subVal = false;                
        }  else if (multVal === true){
            multVal = false;                
        }else if (divVal === true) {
            divVal = false
        }
    });
}
//pushes the text from the readout to an arrray
function handleNumArray(){
    var readoutVal = $('#readout').text();
    numArray.push(readoutVal);
    console.log(numArray);
}               
// Handling My Operations
function handleAdd(){
    $(addBtn).on('click', function(){
        handleNumArray();
        numArray.push(addText);
        newNum = true;
        addVal = true;
    });
}
function handleSub(){
    $(subBtn).on('click', function(){
        handleNumArray();
        var subText = $(subBtn).text();
        numArray.push(subText);
        newNum = true;        
        subVal = true;
    });
}
function handleMult(){
    $(multBtn).on('click', function(){
        handleNumArray();          
        var multText = $(multBtn).text();
        numArray.push(multText);
        newNum = true;        
        multVal = true;       
    });
}
function handleDiv(){
    $(divBtn).on('click', function(){
        handleNumArray();     
        var divText = $(divBtn).text();
        numArray.push(divText);
        newNum = true;        
        divVal = true;         
    });
}
function handleEquals(){
    $(result).on('click', function(){
        handleNumArray();
        $(readout).empty();
        if(addVal === true){
            var add = eval(numArray.join(''));
            console.log(add);
            $(readout).append(add);
        }
        if (subVal === true){
            var sub = eval(numArray.join(''));
            console.log(sub);
            $(readout).append(sub);
        } 
        if(divVal === true ){
            var div = eval(numArray.join(''));
            console.log(div);
            $(readout).append(div);
            console.log(numArray.join(''));            
        } 
        if(multVal === true ){
            var mult = eval(numArray.join(''));
            console.log(mult);
            $(readout).append(mult);
            console.log(numArray.join(''));            
        } 
    });
}





