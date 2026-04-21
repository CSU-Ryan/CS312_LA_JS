function update_active_color(new_color = active_color) {
    $(".strip-cell.selected").removeClass("selected");
    active_color = new_color;
    $(`.strip-cell.${active_color}`).addClass("selected");
}

function apply_color() {
    $(this).removeClass().addClass(`game-cell ${active_color}`);
}

$(document).ready(function () {

    $(".strip-cell").click(function () {
        update_active_color($(this).attr("data-color"));
    });

    $(".game-cell").click(function () {
        apply_color(this);
    });

});
