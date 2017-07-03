var $size = 8;
var $butsize = Math.round(960/$size);
var red = (Math.floor(Math.random() * 256));
var green= (Math.floor(Math.random() * 256));
var blue = (Math.floor(Math.random() * 256));


$(document).ready(function create(){
    for(var i = 0; i < $size; i++) {
        for(var j = 0; j < $size; j++){
         $("<div>").addClass("tile").css({"width": $butsize ,"height": $butsize }).appendTo(".container");
        }};
    
    $("#new").click(function (){ 
        destroy();
        $size = prompt("Enter the size of your new grid:");  
        $butsize = Math.round(960/$size);
        create ();
    });

    $('.tile').hover(function(){
        $(this).addClass("active");
    });
 
    function destroy (){
        for(var t = 0; t < $size; t++) {
            for(var k = 0; k < $size; k++){
                $(".tile").remove();}}
    };
    $("#colors").click(function colors(){
        $(".tile").hover(function(){
            var red = (Math.floor(Math.random() * 256));
            var green= (Math.floor(Math.random() * 256));
            var blue = (Math.floor(Math.random() * 256));
            var color = 'rgb('
            + red + ','
            + green + ','
            + blue + ')';
            $(this).css("background-color" ,color);


        })
    });
    $("#draw").click(function(){
       $('.tile').hover(function(){
        $(this).css("background-color",'darkolivegreen');
        });
    })

    $("#dark").click(function colors(){
        $(".tile").hover(function(){
            var red = (Math.floor(Math.random() * 100));
            var green= (Math.floor(Math.random() * 100));
            var blue = (Math.floor(Math.random() * 100));

            var color = 'rgb('
            + red + ','
            + green + ','
            + blue + ')';
            
                                
                $(this).css("background-color" ,color);
            

        })
    });
});