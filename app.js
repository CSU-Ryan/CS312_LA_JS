function update_active_color(new_color = active_color) {
    $(".strip-cell.selected").removeClass("selected");
    active_color = new_color;
    $(`.strip-cell.${active_color}`).addClass("selected");
}

$(document).ready(function () {

    $(".strip-cell").click(function () {
        update_active_color($(this).attr("data-color"));
    });

    $(".game-cell").click(function () {
        $(this).removeClass().addClass(`game-cell ${active_color}`);
    });

});
