var ref = firebase.database().ref();

ref.once("value").then(function (snapshot) {
    var snapVal = snapshot.val();
    var urlList = ["1", "2", "3"]

    for (let item in snapVal) {
        var snapURL = snapVal[item].imgURL;
        var snapRating = snapVal[item].currentRating;
        var snapClass = snapVal[item].classes;

        console.log(snapClass)
        urlList.push(snapURL);

        console.log(snapURL);

        var newImage = $("<img>");
        newImage.attr("src", snapURL);
        newImage.attr("class", "generated-image");
        if (snapClass === "content beaches") {
            $(".beaches-rated").append(newImage).append("Rating: " + snapRating);
        } else if (snapClass === "content animals") {
            $(".animal-rated").append(newImage).append("Rating: " + snapRating);
        } else if (snapClass === "content buildings") {
            $(".buildings-rated").append(newImage).append("Rating: " + snapRating);
        } else if (snapClass === "content flowers") {
            $(".flowers-rated").append(newImage).append("Rating: " + snapRating);
        } else if (snapClass === "content places") {
            $(".places-rated").append(newImage).append("Rating: " + snapRating);
        } else if (snapClass === "content space") {
            $(".space-rated").append(newImage).append("Rating: " + snapRating);
        }


        var images = $("#picture-dump").find("img").map(function () { return this.src; }).get();

    };
    console.log(images);
    console.log("This is URL List: " + urlList);




});

