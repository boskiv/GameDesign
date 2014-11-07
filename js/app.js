
var boldApplier, italicApplier,underlineApplier;
var arialApplier, comicApplier, georgiaApplier, myriadApplier, ptApplier, timesApplier, verdanaApllier;

function toggleBold() {
    boldApplier.toggleSelection();
}

function toggleItalic() {
    italicApplier.toggleSelection();
}

function toggleUnderline() {
    underlineApplier.toggleSelection();
}

function toggleArial() {
    arialApplier.toggleSelection();
}

function toggleComic() {
    comicApplier.toggleSelection();
}

function toggleGeorgia() {
    georgiaApplier.toggleSelection();
}

function toggleMyriad() {
    myriadApplier.toggleSelection();
}

function togglePt() {
    ptApplier.toggleSelection();
}

function toggleTimes() {
    timesApplier.toggleSelection();
}

function toggleVerdana() {
    verdanaApllier.toggleSelection();
}

var colorApplier;
function toggleColor(){
    colorApplier.toggleSelection();
}

$().ready(function(){
    rangy.init();
    boldApplier = rangy.createCssClassApplier("bold");
    italicApplier = rangy.createCssClassApplier("italic");
    underlineApplier = rangy.createCssClassApplier("underline");
    arialApplier = rangy.createCssClassApplier("arial");
    comicApplier = rangy.createCssClassApplier("comic");
    georgiaApplier = rangy.createCssClassApplier("georgia");
    myriadApplier = rangy.createCssClassApplier("myriad");
    ptApplier = rangy.createCssClassApplier("pt");
    timesApplier = rangy.createCssClassApplier("times");
    verdanaApllier = rangy.createCssClassApplier("verdana");

    $("[data-color]").on('click', function(){
        var color_id = $(this).data('color');
        colorApplier = rangy.createCssClassApplier("font-color-" + color_id);
        toggleColor();
    });

    $("#toggleBoldButton").on('click',function(){
        toggleBold();
    });

    $("#toggleItalicButton").on('click',function(){
        toggleItalic();
    });

    $("#toggleUnderlineButton").on('click',function(){
        toggleUnderline();
    });

    $("#toggleArialButton").on('click',function(){
        toggleArial();
    });

    $("#toggleComicButton").on('click',function(){
        toggleComic();
    });

    $("#toggleGeorgiaButton").on('click',function(){
        toggleGeorgia();
    });

    $("#toggleMyriadButton").on('click',function(){
        toggleMyriad();
    });

    $("#togglePtButton").on('click',function(){
        togglePt();
    });

    $("#toggleTimesButton").on('click',function(){
        toggleTimes();
    });

    $("#toggleVerdanaButton").on('click',function(){
        toggleVerdana();
    });

});


