// Blur effect for cards on mouse hover.
$(document).ready(function () {
    $("#king").mouseenter(function () {
        $("#queen").foggy();
    });

    $("#king").mouseleave(function () {
        $("#queen").foggy(false);
    });

    $("#queen").mouseenter(function () {
        $("#king").foggy();
    });

    $("#queen").mouseleave(function () {
        $("#king").foggy(false);
    });
});
