console.log("connected");
if(jQuery){
    console.log("jquery connected");
}
$("#mentorsToggler").click(function () {
    console.log("clicked");
    $("#mentorsContent").slideToggle("slow", function () {
        // Animation complete.
        console.log("completed");
    });
});

$("#foundersToggler").click(function () {
    $("#foundersContent").slideToggle("slow");
})