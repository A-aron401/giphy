// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

$("#search-button").click(function(){
  var requestUrl = "https://api.giphy.com/v1/gifs/search?q=puppy&rating=pg&api_key=dc6zaTOxFJmzC"
  
  fetch(requestUrl)
  .then(function(response) {
      return response.json();
    })
    .then(function(Gifdata) {
      
      $('body').append('<img src=' + data.downsized_large.url + '>');
    })
    
});
  


