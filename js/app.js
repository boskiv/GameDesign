
var boldApplier;

function toggleBold() {
    boldApplier.toggleSelection();
}

$().ready(function(){
    rangy.init();
    boldApplier = rangy.createCssClassApplier("bold");

    $("#toggleBoldButton").on('click',function(){
        toggleBold();
    });

});


