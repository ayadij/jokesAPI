document.getElementById("joke").addEventListener("click", function(event) {
  event.preventDefault();
  const url =
    "https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist";
  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      let results = json.joke;
      console.log(results);
      // document.getElementById("jumbo").innerHTML = results;
    });
});
