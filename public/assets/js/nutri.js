$(document).ready(function () {
    const appID = "18861f2e";
    const appKey = "68efa84e310a4be31fde38641542ff28";
    let itemDisplay = 1;
    $(document).on("click", ".add", getRecipe);
    $(".list").css("display", "none");

    function getRecipe(event) {
        event.preventDefault();
        let input = $("#userInput").val().trim();
        const url = `https://api.edamam.com/search?q=${input}&app_id=${appID}&app_key=${appKey}&from=0&to=5`;
        console.log(input);
        $.ajax({
            url: url,
            type: "GET",

        }).then(data => {
            let items = data.hits;
            console.log(items);
            items.forEach(element => {

                $("#item-" + itemDisplay).addClass("label-name").children(".recipe-display").html(`${element.recipe.label}`);
                $("#item-" + itemDisplay).children("#recipe-icon").attr("src", element.recipe.image);
                $("#item-" + itemDisplay).children("#recipeLink").attr("href", element.recipe.url);
                itemDisplay++;
                $(".list").css("display", "flex");
            });
        });
        return event;
    }
});

