var start = alert("");

var topics = ["lion", "tiger", "bear", "wolf", "snake", "mouse", "gilamonster", "monkey"]
//6 topics//
var one = 0;
console.log(topics);

function makebuttons() {
    for (i = 0; i < topics.length; i++) {
        var button = $("<button>").html(topics[i]);
        button.addClass("buttonstyle");


        //grab = button.val($(this));

        button.on("click", function () {
            //$("#huh").text("inch");
            $("#gifField").html("HEY");

            var APIKey = "MKx7Mjp2X4LMvUfknqdeT7tyc1WtMsO7";

            queryURL = "https://api.giphy.com/v1/gifs/search?q=" + button.val(this) + "&api_key=" + APIKey + "&limit=5";

            $.ajax({
                url: queryURL,
                method: "GET"
            })
                .then(function (response) {


                    console.log(queryURL);
                    console.log(response);
                    results = response.data;
                    for (var i = 0; i < results.length; i++) {
                        var animalDiv = $("<div>");
                        var animalImage = $("<img>");
                        animalImage.attr("src", results[i].images.fixed_height.url);
                        animalDiv.append(animalImage);
                    };
                });


            console.log($(this).html())
        })


        $("#buttonfield").append(button);
    }
};

makebuttons();







var gifspot = $("#gifField");




//var  = topics[3];

var APIKey = "MKx7Mjp2X4LMvUfknqdeT7tyc1WtMsO7";

queryURL = "https://api.giphy.com/v1/gifs/search?q=" + "tiger" + "&api_key=" + APIKey + "&limit=5";

$.ajax({
    url: queryURL,
    method: "GET"
})
    .then(function (response) {


        console.log(queryURL);
        console.log(response);
        results = response.data;
        for (var i = 0; i < results.length; i++) {
            var animalDiv = $("<div>");
            var animalImage = $("<img>");
            animalImage.attr("src", results[i].images.fixed_height.url);
            animalDiv.append(animalImage);
        };
    });








// function makebuttons() {
//     for (i = 0; i < topics.length; i++) {
//         var button = $("<button>").html(topics[i]);
//         button.addClass("buttonstyle");

//         button.on("click", function () {
//             $("#huh").text(button.val(this));

//             //var animal = $(this).attr("data-animal");






//             $("#buttonfield").append(button);
//         }
//     );

//         makebuttons();

//         var APIKey = "MKx7Mjp2X4LMvUfknqdeT7tyc1WtMsO7";
//         // //"&limit=5"
//         queryURL = "https://api.giphy.com/v1/gifs/search?q=" + button + "&api_key=" + APIKey;

//         $.ajax({
//             url: queryURL,
//             method: "GET"
//         })
//             .then(function (response) {
//                 console.log(queryURL);
//                 console.log(response);
                //var results = response.data;
                // for (var i = 0; i < results.length; i++)
                //     var animaldiv = $("<div>");
                // var animalImage = $("<img>");
                // animalImage.attr("src", results[i].images.fixed_height.url);
                // animalDiv.append(animalImage);
                // $("#gifField").prepend(animalDiv);
            //});


        // $.ajax({
        //     url: queryURL,
        //     method: "GET"
        // })
        //     .then(function (response) {
        //         console.log(queryURL);
        //         console.log(response);
        //         var results = response.data;
        //         for (var i = 0; i < results.length; i++)
        //             var animaldiv = $("<div>");
        //         var animalImage = $("<img>");
        //         animalImage.attr("src", results[i].images.fixed_height.url);
        //         animalDiv.append(animalImage);
        //         $("#gifField").prepend(animalDiv);
        //     });
