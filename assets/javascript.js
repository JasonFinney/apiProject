



// This is the the DogsAPI
$(document).on("click", "#catagory-1", function () {
    var queryURL = "https://dog.ceo/api/breeds/image/random";
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            var dogImg = $("<img>");
            dogImg.attr("src", response.message);
            dogImg.attr("alt", "Dogs API");
            console.log(dogImg);
            $("#catagory-1").append(dogImg);
        });
});
// End DogsAPI


// This is the Pixabay API
$(document).on("click", "#catagory-2", function () {
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
            $("#catagory-2").append(pixImg);
        });
});
// End Pixabay API

$('.topics').on('click', function () {
    $('#image-display').removeClass('hidden');
    $('#main-display').addClass('hidden');
})
