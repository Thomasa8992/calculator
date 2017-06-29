var clearBtn = $('#clear'),
addBtn = $('#add'),
numArray = [];
$(document).ready(function(){
    handleSpan();
    handleNum();
    handleClear();
    handlePlus();
});

function handleNum(){
    $('.num').on('mousedown', function() {
        var numText = $(this).text();
        $('#readout').append(numText);
    });   
}
function handleSpan(){
    $('span').on('mousedown', function() {
        $(this).addClass("highlight");
    });        
    $('span').on('mouseup', function(){
        $(this).removeClass("highlight");
    });
}
function handleClear(){
    $(clearBtn).on('click', function(){
    $('#readout').empty();
    })
}

function handlePlus(a , b){
    $(addBtn).on('click', function(){
        if(addBtn){
            var readoutVal = $('#readout').val();
            numArray.push;
            console.log(numArray);
        }
    })
}
    

        