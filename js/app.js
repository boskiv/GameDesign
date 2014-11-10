var fontApplier, colorApplier;

function toggleFont() {
    console.log("toggle font");
    fontApplier.toggleSelection();
}

function toggleColor(){
    colorApplier.toggleSelection();
}

$().ready(function(){
    rangy.init();
    console.log("rangy init");

    $("[data-font]").on('click', function(){
        var font_id = $(this).data('font');
        console.log(font_id);
        fontApplier = rangy.createCssClassApplier(font_id);
        toggleFont();
    });

    $("[data-color]").on('click', function(){
        var color_id = $(this).data('color');
        colorApplier = rangy.createCssClassApplier("font-color-" + color_id);
        toggleColor();
    });

});


