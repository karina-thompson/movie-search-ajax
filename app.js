

var listMovies = function(data) {
  $('p').detach();
  data["Search"].forEach(function(movie) {
    var $newListing = $('<p>').text(movie["Title"]);
    $('.results').append($newListing);
  })
}


var searchMovies = function() { $.ajax({
  url: 'http://www.omdbapi.com/?s=' + $('.movieSearch').val(),
  method: 'get' 
}).done(listMovies);
};
  
  
$('.search').on('click', searchMovies);