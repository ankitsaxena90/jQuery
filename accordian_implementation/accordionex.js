$(document).ready(function() {
    var nodes = $('.container a');
    var url = location.href;
    var name = url.split("?");
    if(name[1] != undefined) {

        $(nodes[name[1]]).css('background-color', 'red');
        $(nodes[name[1]]).parents().slideDown();
    }

    $('.container a').click(function(e){
        var link = $(this).attr('href');
        if($(this).children().length == 0) {
           e.preventDefault();
           //num = $(this).text();
           num = nodes.index($(this));
           link += '?' + num;
           window.open(link, '_self');
        }
    });
});