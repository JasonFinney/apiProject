



//Random number generator
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

var animalArray = [];
var queryCatURL = "https://api.giphy.com/v1/gifs/search?q=cats&api_key=gLeB5PHXzjgIpt57b5y35Y0ukNAkv14k";
$.ajax({
    url: queryCatURL,
    method: "GET"
}).then(function (response) {
    for (i = 0; i < 5; i++) {
        animalArray.push(response.data[i].images.original.url);
    };
    for (i = 5; i < 10; i++) {
        animalArray.push(response.data[i].images.original_still.url);
    };
});
var queryDogUrl = "https://api.giphy.com/v1/gifs/search?q=dogs&api_key=gLeB5PHXzjgIpt57b5y35Y0ukNAkv14k";
$.ajax({
    url: queryDogUrl,
    method: "GET"
}).then(function (response) {
    for (i = 0; i < 5; i++) {
        animalArray.push(response.data[i].images.original.url);
    };
    for (i = 5; i < 10; i++) {
        animalArray.push(response.data[i].images.original_still.url);
    };
});

// This is the the Giphy API to generate pictures for the animals category
$(document).on("click", "#category-1", function () {
    console.log(animalArray);
    $(".animal-content").remove();
    console.log(animalArray[getRandomInt(19)]);
    var giph = $("<img>");
    giph.attr("src", animalArray[getRandomInt(19)]);
    giph.attr("alt", "Giphy Gif");
    giph.attr("class", "animal-content")
    $("#category-1").append(giph);
});
// End GiphyAPI


// This is the Pixabay API
$(document).on("click", "#category-2", function () {
    var search = "buildings";
    var queryURL = "https://pixabay.com/api/?key=9844470-f932d947d803c027b1f4634e4&q=" + search;
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            var pixImg = $("<img>");
            pixImg.attr("src", response.hits[0].webformatURL
            );
            pixImg.attr("alt", "Pixbay Free Images");
            $("#category-2").append(pixImg);
        });
});


$('.topics').on('click', function () {
    $('#image-display').removeClass('hidden');
    $('#main-display').addClass('hidden');
})

