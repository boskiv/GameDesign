var fontApplier, colorApplier;

function toggleFont() {
    console.log("toggle font");
    fontApplier.toggleSelection();
}

function toggleColor(){
    colorApplier.toggleSelection();
}

function logArrayElements(element, index, array) {
  console.log('a[' + index + '] = ' + element);
  
  $("#field").append('<div class="brick">'+ element +'</div>');
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
    
        
    $("#fireBtn").on("click",function () {
        // body...
        console.log("start to devide blocks...");
        var content = $("#src-content").text();
        var c_arr = content.split(' ');
        $("#field").empty();
        c_arr.forEach(logArrayElements);
        $("#field").append('<div id="paddle"></div>');
        $("#field").append('<div id="ball" style="left: 154px; top: 288px;"></div>');
        $("#field").append('<div id="lifesNode">3</div>');
        $("#field").append('<div id="scoreNode">0</div>');
        
        $('#myModal').modal('show');
    })
    

});


