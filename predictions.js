$(document).ready(function(){
    var pictures = ['predictionsimages/lala1.jpg', 'predictionsimages/emma.jpg', 'predictionsimages/denzel.png', 'predictionsimages/viola.jpg', 'predictionsimages/ali.jpg','predictionsimages/zoo.jpg','predictionsimages/damien.jpg', 'predictionsimages/lala.jpg']
    var text = ['LA LA LAND', 'EMMA STONE', 'DENZEL WASHINGTON', 'VIOLA DAVIS', 'MAHERSHALA ALI', 'ZOOTOPIA', 'DAMIEN CHAZELLE', 'CITY OF STARS']
    //var graphs = ['images/chart.png']
    var textval;
    $("select").change(function(){
        value = $(this).val();
        textval = value;
         $("#slide2").css("background-image", 'url('+pictures[value]+')');
         //$("#graph").fadeout(400).graphs('url('+graphs[value]+').fadein(400);
         $("#winnername").fadeOut(400).text(text[value]).fadeIn(400);
        //  if(value == 2) {
        //      $("#winnername").css("color", "#000 !important");
        //  }
}).change();
})
