var ref = firebase.database().ref();

ref.once("value").then(function (snapshot) {
    var snapVal = snapshot.val();
    var urlList = ["1", "2", "3"]

    for (let item in snapVal) {
        var snapURL = snapVal[item].imgURL;
        var snapRating = snapVal[item].currentRating;
        var snapClass = snapVal[item].classes;
        var snapComment = snapVal[item].comment;

        console.log(snapClass)
        urlList.push(snapURL);

        console.log(snapURL);

        var newImage = $("<img>");
        newImage.attr("src", snapURL);
        newImage.attr("class", "generated-image");
        if (snapClass === "content beaches") {
            var ratings = $("<div>").attr("class", "ratings");
            var comments = $("<div>").attr("class", "comments");
            ratings.append("Rating: " + snapRating);
            comments.append("Comment: " + snapComment);
            $(".beaches-rated").append(newImage).append(ratings).append(comments);
        } else if (snapClass === "content animals") {
            var ratings = $("<div>").attr("class", "ratings");
            var comments = $("<div>").attr("class", "comments");
            ratings.append("Rating: " + snapRating);
            comments.append("Comment: " + snapComment);
            $(".animal-rated").append(newImage).append(ratings).append(comments);
        } else if (snapClass === "content buildings") {
            var ratings = $("<div>").attr("class", "ratings");
            var comments = $("<div>").attr("class", "comments");
            ratings.append("Rating: " + snapRating);
            comments.append("Comment: " + snapComment);
            $(".buildings-rated").append(newImage).append(ratings).append(comments);
        } else if (snapClass === "content flowers") {
            var ratings = $("<div>").attr("class", "ratings");
            var comments = $("<div>").attr("class", "comments");
            ratings.append("Rating: " + snapRating);
            comments.append("Comment: " + snapComment);
            $(".flowers-rated").append(newImage).append(ratings).append(comments);
        } else if (snapClass === "content places") {
            var ratings = $("<div>").attr("class", "ratings");
            var comments = $("<div>").attr("class", "comments");
            ratings.append("Rating: " + snapRating);
            comments.append("Comment: " + snapComment);
            $(".places-rated").append(newImage).append(ratings).append(comments);
        } else if (snapClass === "content space") {
            var ratings = $("<div>").attr("class", "ratings");
            var comments = $("<div>").attr("class", "comments");
            ratings.append("Rating: " + snapRating);
            comments.append("Comment: " + snapComment);
            $(".space-rated").append(newImage).append(ratings).append(comments);
        }


        var images = $("#picture-dump").find("img").map(function () { return this.src; }).get();

    };
    console.log(images);
    console.log("This is URL List: " + urlList);




});

