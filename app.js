function update_active_color(new_color = active_color) {
    // Updates all cells to reflect new color.
    $(`.game-cell.${active_color}`)
        .removeClass().addClass(new_color).addClass("game-cell");

    // Updates color picker
    $(".strip-cell.selected").removeClass("selected");
    active_color = new_color;
    $(`.strip-cell.${active_color}`).addClass("selected");

}

function toggle_color(obj) {
    let cell = $(obj);
    let class_list = cell.attr("class").split(" ");

    cell.removeClass();
    if (class_list.length >= 2) {
        cell.addClass("game-cell");
    } else {
        cell.addClass(`${active_color} game-cell`);
    }
}


$(document).ready(function () {

    $(".strip-cell").click(function () {
        update_active_color($(this).attr("data-color"));
    });

    $(".game-cell").click(function () {
        toggle_cell_and_neighbors(this);
    });

});
