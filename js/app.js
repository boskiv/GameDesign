
var boldApplier, italicApplier,underlineApplier;

function toggleBold() {
    boldApplier.toggleSelection();
}
function toggleItalic() {
    italicApplier.toggleSelection();
}
function toggleUnderline() {
    underlineApplier.toggleSelection();
}

$().ready(function(){
    rangy.init();
    boldApplier = rangy.createCssClassApplier("bold");
    italicApplier = rangy.createCssClassApplier("italic");
    underlineApplier = rangy.createCssClassApplier("underline");

    $("#toggleBoldButton").on('click',function(){
        toggleBold();
    });

    $("#toggleItalicButton").on('click',function(){
        toggleItalic();
    });

    $("#toggleUnderlineButton").on('click',function(){
        toggleUnderline();
    });

});


