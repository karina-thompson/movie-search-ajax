

var listMovies = function(data) {
  $('p').detach();
  $('img').detach();
  data.Search.forEach(function(movie) {
    var $movieTitle = $('<p>').text(movie.Title);
    var $poster = $('<img src="' + movie.Poster + '">');
    $('.results').append($movieTitle).append($poster);
  })
}

var searchMovies = function() { $.ajax({
  url: 'http://www.omdbapi.com/?s=' + $('.movieSearch').val(),
  method: 'get' 
}).done(listMovies);
};
  
$('.search').on('click', searchMovies);