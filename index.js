function ajaxCall(){
    $.ajax({
        url:'https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch='
            + $('#search').val(),
        dataType: 'jsonp',
        type:'GET',
        success: function(data){
            $('#update').empty();
            var data = JSON.stringify(data);
            data = JSON.parse(data)

            var output = '';
            data.query.search.forEach(function(data){
                var title = "<h2>"+ data.title + "</h2>"+ "<br>";
                var snippet = "<p>"+ data.snippet + "<p>";
                var url = '<a href= "https://en.wikipedia.org/wiki/'+ data.title + '" target=_blank">';
                var endUrl = '</a>';
                output += url + title + endUrl;

            });
            $('#update').append(output);
        }
    });
}

function randomFunction(){
    $('#update').empty();
    $('#search').empty();
    $('iframe').attr('src', 'https://en.wikipedia.org/wiki/Special:Random');

}

$(document).ready(function(){

    $('#search').focus();
    $('#search').off();
    $('#search').on('keyup', function(){
        ajaxCall();
        $('iframe').attr('src','');

    });
    //show random wiki Article
    $('.random').on('click', function(){
        randomFunction();
        $(this).text('Show another random article');

    });
});
