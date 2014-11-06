var boldApplier;

function gEBI(id) {
    return document.getElementById(id);
}

function toggleBold() {
    console.log("bold in function");
    boldApplier.toggleSelection();
}

$().ready(function(){
    console.log("jquery started");
    rangy.init()

    boldApplier = rangy.createCssClassApplier("bold");
    console.log(boldApplier);


    $("#toggleBoldButton").on('click',function(){
        var selection = rangy.getSelection();
        console.log(selection);
        toggleBold();
        return false;
    });

});


